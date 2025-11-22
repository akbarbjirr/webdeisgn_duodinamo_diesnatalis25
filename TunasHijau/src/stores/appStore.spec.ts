import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from './appStore'
import type { Event } from '@/types'

describe('App Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds new event', () => {
    const store = useAppStore()
    const newEvent: Event = {
      id: 2,
      title: 'New Event',
      description: 'New Description',
      date: '2024-07-01',
      location: 'New Location',
      image: '/new.jpg'
    }

    store.addEvent(newEvent)

    expect(store.events).toHaveLength(2)
    expect(store.events.length).toBeGreaterThanOrEqual(2)
    if (store.events[1]) {
      expect(store.events[1].title).toBe('New Event')
    }
  })

  it('filters upcoming events', () => {
    const store = useAppStore()
    
    expect(store.upcomingEvents.length).toBeGreaterThanOrEqual(1)
  })
})