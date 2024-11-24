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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const copy_paste_1 = __importDefault(require("copy-paste"));
const ts = __importStar(require("typescript"));
const fs = __importStar(require("fs"));
const bing_translate_api_1 = require("bing-translate-api");
const program = new commander_1.Command();
const supportedLanguages = ['en-US', 'zh-CN', 'vi-VN', 'km-KH']; // Add more languages as needed
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function toCamelCase(input) {
    let maxLength = 30;
    // Remove all symbols except letters and numbers
    const cleanString = input.replace(/[^a-zA-Z0-9 ]/g, '');
    // Split the cleaned string by spaces
    const words = cleanString.split(/\s+/);
    // Capitalize each word except the first one
    const text = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase(); // Lowercase the first word
        }
        else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join('');
    // Remove leading and trailing whitespaces and convert to camel case
    const trimmedCamelCase = text.trim().replace(/\s+(.)/g, ($0, $1) => $1.toUpperCase());
    // Ensure the final string does not exceed the maximum length
    return trimmedCamelCase.length > maxLength ? trimmedCamelCase.slice(0, maxLength) : trimmedCamelCase;
}
const generateTranslate = (filePath, text, key) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest, true);
    const fileContentText = fileContent.split('\n');
    let firstClass;
    let langKey = key ? key : toCamelCase(text);
    ts.forEachChild(sourceFile, node => {
        if (ts.isClassDeclaration(node) && !firstClass) {
            firstClass = node;
        }
    });
    if (firstClass) {
        const existingStaticVar = firstClass.members.find(member => {
            return ts.isPropertyDeclaration(member) && member.name.getText() === langKey;
        });
        console.log(text);
        if (!existingStaticVar) {
            let langJson = '';
            for (const i in supportedLanguages) {
                const lang = supportedLanguages[i];
                let tran = text;
                if (lang !== 'en-US') {
                    try {
                        let langName = lang;
                        switch (lang) {
                            case 'zh-CN':
                                langName = 'zh-Hans';
                                break;
                            case 'vi-VN':
                                langName = 'vi';
                                break;
                            case 'km-KH':
                                langName = 'km';
                                break;
                        }
                        const res = yield (0, bing_translate_api_1.translate)(text, 'en', langName);
                        if (res === null || res === void 0 ? void 0 : res.translation) {
                            tran = res === null || res === void 0 ? void 0 : res.translation;
                        }
                    }
                    catch (_b) {
                    }
                }
                langJson += `    '${lang}': "${tran}",` + '\n';
            }
            let newText = `  static readonly ${langKey} : L = new ILanguage({
${langJson}
  });\n`;
            fileContentText.splice(6, 0, newText);
            fs.writeFileSync(filePath, fileContentText.join('\n'));
            console.log(`Text added successfully`);
        }
        else {
            console.log(`Static variable ${langKey} already exists in the class.`);
        }
        copy_paste_1.default.copy(((_a = firstClass.name) === null || _a === void 0 ? void 0 : _a.text) + '.' + langKey + '.r');
    }
    else {
        console.log('No class found in the file.');
    }
});
program
    .version('1.0.0')
    .description('A CLI tool to generate class translate paths')
    .option('-k, --key <key>', '')
    .action((options) => {
    let text = copy_paste_1.default.paste();
    generateTranslate('src/translate.ts', text, options.key);
});
program.parse(process.argv);
