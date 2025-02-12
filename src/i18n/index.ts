import en_US from './en_US'
import zh_CN from './zh_CN'


export const Language = {
    en_US,
    zh_CN,
}

export type Lang = keyof typeof Language

export const locales = Object.keys(Language)

export function getDefaultLanguage (): Lang {
    for (const language of window.navigator.languages) {
        if (language.includes('zh-cn')) {
            return 'zh_CN'
        }
    }
    return 'en_US'
}
