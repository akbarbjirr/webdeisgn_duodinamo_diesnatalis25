import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from './appStore'

describe('App Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with articles', () => {
    const store = useAppStore()
    expect(store.articles).toBeDefined()
    expect(store.articles.length).toBeGreaterThan(0)
  })

  it('can add articles', () => {
    const store = useAppStore()
    const initialCount = store.articles.length
    store.addArticle({
      id: 999,
      title: 'Test Article',
      content: 'Test content',
      author: 'Test',
      date: '2024-11-27',
      category: 'Test'
    })
    expect(store.articles.length).toBe(initialCount + 1)
  })
})