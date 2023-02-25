export interface ICurrencyRate {
  quotes: Record<string, number>
  source: string
  success: boolean
  timestamp: number
}

export interface IFetchRate {
  currencies: string
  source: string
}
