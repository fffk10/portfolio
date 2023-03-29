import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export const dateTimeFormat = (date: string) => {
  try {
    return format(new Date(date), 'yyyy-MM-dd', { locale: ja })
  } catch (e) {
    return ''
  }
}
