import en_US from './en_US'
import zh_CN from './zh_CN'
import zh_TW from './zh_TW'


export const Language = {
    en_US,
    zh_CN,
    zh_TW,
}

export type Lang = keyof typeof Language

export const locales = Object.keys(Language)

export function getDefaultLanguage (): Lang {
    for (const language of window.navigator.languages) {
        if (language.includes('zh-cn')) {
            return 'zh_CN'
        } else if (language.includes('zh-tw')) {
            return 'zh_TW'
        }
    }

    return 'en_US'
}
