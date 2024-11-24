"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const program = new commander_1.Command();
function snakeToCamel(str) {
    return str.replace(/([-_]\w)/g, (match) => match.toUpperCase().replace('-', '').replace('_', ''));
}
const generateImagePaths = (directoryPath, projectRoot) => {
    let imagePaths = '';
    const files = fs.readdirSync(directoryPath);
    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const relativePath = path.relative(projectRoot, filePath);
        const stat = fs.statSync(filePath);
        // Define the segment to remove
        const segmentToRemove = 'public';
        if (stat.isDirectory()) {
            imagePaths += generateImagePaths(filePath, projectRoot);
        }
        else if (stat.isFile() && (file.endsWith('.jpg') || file.endsWith('.webp') || file.endsWith('.svg') || file.endsWith('.jpeg') || file.endsWith('.png'))) {
            const relativeStaticPath = path.relative(directoryPath, filePath);
            const variableName = relativeStaticPath.replace(/\W/g, '_').replace(/\.(webp|svg|jpg|jpeg|png)$/i, '');
            imagePaths += `  static readonly ${snakeToCamel(variableName)}: string = '${relativePath.replace(segmentToRemove, '').replace(/\\/g, '/')}';\n`;
        }
    }
    return imagePaths;
};
program
    .version('1.0.0')
    .description('A CLI tool to generate class assets paths')
    .requiredOption('-d, --directory <path>', 'Specify the directory path')
    .action((options) => {
    const directoryPath = path.resolve(options.directory);
    const projectRoot = process.cwd();
    const imagePaths = generateImagePaths(directoryPath, projectRoot);
    const classContent = `export class Assets {
${imagePaths}
}`;
    fs.writeFile('src/assets.ts', classContent, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        }
        else {
            console.log('Assets class generated successfully!');
        }
    });
});
program.parse(process.argv);
