import { Assets } from "@/assets"

export interface ILanguage {
    code: string,
    title: string,
    url: string,
}

export const LanguageItems: Array<ILanguage> = [
    {
        code: "km-KH",
        title: "Khmer",
        url: Assets.kmKHSvg
    },
    {
        code: "zh-CN",
        title: "China",
        url: Assets.zhCNSvg
    },
    {
        code: "en-US",
        title: "English",
        url: Assets.enUSSvg
    }
]

