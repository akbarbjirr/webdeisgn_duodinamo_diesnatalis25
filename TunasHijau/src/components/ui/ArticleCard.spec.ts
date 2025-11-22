import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleCard from './ArticleCard.vue'
import type { Article } from '@/types'

describe('ArticleCard', () => {
  const mockArticle: Article = {
    id: 1,
    title: 'Test Article',
    content: 'This is a test article content that should be truncated',
    author: 'Test Author',
    date: '2024-05-01',
    category: 'Lingkungan'
  }

  it('renders article content correctly', () => {
    const wrapper = mount(ArticleCard, {
      props: { article: mockArticle }
    })

    expect(wrapper.text()).toContain('Test Article')
    expect(wrapper.text()).toContain('Test Author')
    expect(wrapper.text()).toContain('Lingkungan')
  })

  it('truncates long content', () => {
    const wrapper = mount(ArticleCard, {
      props: { article: mockArticle }
    })

    const excerpt = wrapper.find('.article-excerpt').text()
    expect(excerpt.length).toBeLessThanOrEqual(103) // 100 chars + '...'
  })
})