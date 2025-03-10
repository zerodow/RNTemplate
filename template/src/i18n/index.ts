import i18n, { TOptions } from "i18next"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import customParseFormat from "dayjs/plugin/customParseFormat"
import "dayjs/locale/en"

import { LANGUAGE_NAME } from "@/utils/constant"
import { loadString, saveString } from "@/utils/storage"
import STORAGE_KEY from "@/utils/storage/storageKey"
import { initReactI18next } from "react-i18next"

const en = require("./en/en.json")
const vi = require("./vi/vi.json")

const locale = loadString(STORAGE_KEY.LANGUAGE_KEY) || LANGUAGE_NAME.EN

dayjs.locale(locale)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

export const availableNamespaces = ["common", "welcomeScreen", "errorScreen"]

export const initI18n = async () => {
  i18n.use(initReactI18next)
  saveString(STORAGE_KEY.LANGUAGE_KEY, LANGUAGE_NAME.EN)
  await i18n.init({
    resources: {
      en,
      vi,
    },
    ns: availableNamespaces,
    fallbackNS: "common",
    defaultNS: "common",
    lng: locale,
    fallbackLng: LANGUAGE_NAME.EN,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    compatibilityJSON: "v4",
  })

  return i18n
}

export function translate(key: any, options?: TOptions): string {
  if (i18n.isInitialized) {
    return i18n.t(key, options)
  }
  return key
}

export function changeLanguage(language: string) {
  if (i18n.isInitialized) {
    i18n
      .changeLanguage(language)
      .then(() => {
        //change locale in storage
        saveString(STORAGE_KEY.LANGUAGE_KEY, i18n.language)
      })
      .catch((error) => console.log("error", error))
  }
}

export const I18n = i18n
