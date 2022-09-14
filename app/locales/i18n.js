import { I18nManager } from 'react-native'
import I18n from 'react-native-i18n'
import memoize from 'lodash.memoize'

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./en.json'),
  ur: () => require('./ur.json')
}

export const strings = memoize(
  (key, config) => I18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
)

export const setI18nConfig = ({ lang, rtl }) => {
  const fallback = { languageTag: lang, isRTL: rtl }

  const { languageTag, isRTL } = fallback
  // clear translation cache
  strings.cache.clear()
  // update layout direction
  I18nManager.forceRTL(isRTL)
  // set i18n-js config
  I18n.translations = { [languageTag]: translationGetters[languageTag]() }
  I18n.locale = languageTag
}

export default I18n
