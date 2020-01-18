// English
import en_common from './locales/en/common.json'
import en_authentication from './locales/en/authentication.json'
import en_device from  './locales/en/device.json'
// Spanish
import es_common from './locales/es/common.json'
import es_authentication from './locales/es/authentication.json'
import es_device from  './locales/es/device.json'

export default {
  en: {
    translation: {
      ...en_common,
      ...en_authentication,
      ...en_device
    }
  },
  es: {
    translation: {
      ...es_common,
      ...es_authentication,
      ...es_device
    }
  }
}
