import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EventList from './EventList.vue'
import type { Event } from '@/types'

describe('EventList', () => {
  const mockEvents: Event[] = [
    {
      id: 1,
      title: 'Test Event',
      description: 'Test Description',
      date: '2024-06-15',
      location: 'Test Location',
      image: '/test.jpg'
    }
  ]

  it('renders events correctly', () => {
    const wrapper = mount(EventList, {
      props: { events: mockEvents }
    })

    expect(wrapper.text()).toContain('Test Event')
    expect(wrapper.text()).toContain('Test Description')
  })

  it('shows no events message when empty', () => {
    const wrapper = mount(EventList, {
      props: { events: [] }
    })

    expect(wrapper.text()).toContain('Tidak ada kegiatan yang akan datang')
  })
})