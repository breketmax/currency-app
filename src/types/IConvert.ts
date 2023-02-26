export interface IConvert {
  success: boolean
  query: IQuery
  info: IInfo
  result: number
}

export interface IQuery {
  from: string
  to: string
  amount: number
}

interface IInfo {
  timestamp: number
  quote: number
}

export interface IConvertError {
  error: IError
  success: boolean
}

interface IError {
  code: number
  info: string
}
