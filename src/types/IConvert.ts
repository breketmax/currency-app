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
