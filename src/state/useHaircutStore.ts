import { create } from 'zustand'
import { DEFAULT_HAIRCUT, HAIRCUT_LIMITS, type Haircut } from './haircut'

type HaircutStore = Haircut & {
  set: <K extends keyof Haircut>(field: K, value: Haircut[K]) => void
  reset: () => void
}

const clamp = (value: number, { min, max }: { min: number; max: number }) =>
  Math.min(max, Math.max(min, value))

const clampLengths = (haircut: Haircut): Haircut => ({
  ...haircut,
  topLengthIn: clamp(haircut.topLengthIn, HAIRCUT_LIMITS.topLengthIn),
  sideLengthIn: clamp(haircut.sideLengthIn, HAIRCUT_LIMITS.sideLengthIn),
  backLengthIn: clamp(haircut.backLengthIn, HAIRCUT_LIMITS.backLengthIn),
})

export const useHaircutStore = create<HaircutStore>()((setState) => ({
  ...DEFAULT_HAIRCUT,
  set: (field, value) =>
    setState((state) => clampLengths({ ...state, [field]: value })),
  reset: () => setState(DEFAULT_HAIRCUT),
}))
