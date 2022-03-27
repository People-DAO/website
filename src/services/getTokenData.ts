const getTokenData = async (onError?: (err: unknown) => void): Promise<TokenData> => {
  try {
    const response = await fetch("/api/token")
    const data = await response.json()

    return data
  } catch (err) {
    onError(err)
  }
}

export type TokenData = {
  timestamp: number
  price: number
  volume24h: number
  marketCap: number
}

export default getTokenData