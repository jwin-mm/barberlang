import { beforeEach, describe, expect, it } from 'vitest'
import { DEFAULT_HAIRCUT } from './haircut'
import { useHaircutStore } from './useHaircutStore'

const { set, reset } = useHaircutStore.getState()

describe('useHaircutStore', () => {
  beforeEach(() => {
    reset()
  })

  it('starts with the default haircut', () => {
    expect(useHaircutStore.getState()).toMatchObject(DEFAULT_HAIRCUT)
  })

  it('sets a field', () => {
    set('fadeHeight', 'high')
    expect(useHaircutStore.getState().fadeHeight).toBe('high')
  })

  it('clamps lengths above the max', () => {
    set('topLengthIn', 10)
    set('sideLengthIn', 5)
    set('backLengthIn', 4)
    const { topLengthIn, sideLengthIn, backLengthIn } =
      useHaircutStore.getState()
    expect(topLengthIn).toBe(6)
    expect(sideLengthIn).toBe(3)
    expect(backLengthIn).toBe(3)
  })

  it('clamps lengths below the min', () => {
    set('topLengthIn', 0)
    set('sideLengthIn', -1)
    expect(useHaircutStore.getState().topLengthIn).toBe(0.25)
    expect(useHaircutStore.getState().sideLengthIn).toBe(0)
  })

  it('keeps values inside the range unchanged', () => {
    set('topLengthIn', 3.5)
    expect(useHaircutStore.getState().topLengthIn).toBe(3.5)
  })

  it('resets to the default haircut', () => {
    set('curl', 'coily')
    set('topLengthIn', 5)
    reset()
    expect(useHaircutStore.getState()).toMatchObject(DEFAULT_HAIRCUT)
  })
})
