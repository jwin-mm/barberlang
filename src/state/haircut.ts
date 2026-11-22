export type FadeHeight = 'none' | 'low' | 'mid' | 'high'
export type Curl = 'straight' | 'wavy' | 'curly' | 'coily'
export type Neckline = 'blocked' | 'rounded' | 'tapered'

export type Haircut = {
  topLengthIn: number
  sideLengthIn: number
  backLengthIn: number
  fadeHeight: FadeHeight
  curl: Curl
  colorHex: string
  neckline: Neckline
}

export const HAIRCUT_LIMITS = {
  topLengthIn: { min: 0.25, max: 6 },
  sideLengthIn: { min: 0, max: 3 },
  backLengthIn: { min: 0, max: 3 },
} as const

export const DEFAULT_HAIRCUT: Haircut = {
  topLengthIn: 2,
  sideLengthIn: 0.5,
  backLengthIn: 0.5,
  fadeHeight: 'low',
  curl: 'straight',
  colorHex: '#2b1b10',
  neckline: 'tapered',
}
