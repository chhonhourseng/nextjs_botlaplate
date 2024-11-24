import { Assets } from "@/assets"

export interface ILanguage {
    code: string,
    title: string,
    url: string,
}

export const LanguageItems: Array<ILanguage> = [
    {
        code: 'en-US',
        title: 'English',
        url: Assets.enUSSvg,
    },
    {
        code: 'zh-CN',
        title: 'China',
        url: Assets.zhCNSvg,
    },
    {
        code: 'km-KH',
        title: 'Khmer',
        url: Assets.kmKHSvg,
    },
    {
        code: 'vi-VN',
        title: 'Vietnam',
        url: Assets.viVNSvg,
    },
]

