import { writable } from "svelte/store"
import numbro from "numbro"

import type { Writable } from "svelte/store"

export const loading = writable(true)
export const error = writable(false)
export const tokenData: Writable<TokenData | Record<string, unknown>> = writable({})

export const getTokenData = async (): Promise<void> => {
  loading.set(true)

  try {
    const response = await fetch("/api/token")
    const data = await response.json()

    if (response.status !== 200) {
      error.set(true)
      loading.set(false)
    }

    const formattedData = {}

    for (const item in data) {
      if (item === "timestamp") {
        formattedData[item] = data[item]
        continue;
      }

      formattedData[item] = formatPrice(data[item])
    }

    tokenData.set(formattedData)
    loading.set(false)
  } catch (err) {
    error.set(true)
  }
}

const formatPrice = (number: number): string => {
  return numbro(number)
    .format({
      // optionalMantissa: true,
      mantissa: number > 10 ? 2 : 5,
      average: true,
      lowPrecision: false,
    })
    .toUpperCase()
}

type TokenData = {
  timestamp: number
  price: number
  volume24h: number
  marketCap: number
}
