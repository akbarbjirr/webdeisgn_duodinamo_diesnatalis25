import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from './appStore'
import type { Event } from '@/types'

describe('App Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

})