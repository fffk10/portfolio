import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'wara', // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: '5687d130d61649bf91127ac783e3fb8066e8',
})
