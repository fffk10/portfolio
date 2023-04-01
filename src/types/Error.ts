export type ErrorType = 'データ取得失敗' | '予期せぬエラー' | ''

export type ErrorDetail = {
  type: ErrorType | undefined
  message: string
}
