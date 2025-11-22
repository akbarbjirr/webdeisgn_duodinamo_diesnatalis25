<template>
  <article class="article-card">
    <div class="article-image">
      <img :src="getArticleImage(article.category)" :alt="article.title" />
    </div>
    <div class="article-content">
      <span class="article-category">{{ article.category }}</span>
      <h3 class="article-title">{{ article.title }}</h3>
      <p class="article-excerpt">{{ getExcerpt(article.content) }}</p>
      <div class="article-meta">
        <span class="article-author">By {{ article.author }}</span>
        <span class="article-date">{{ formatDate(article.date) }}</span>
      </div>
      <button class="read-more-btn">Baca Selengkapnya</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '@/types'

interface Props {
  article: Article
}

defineProps<Props>()

const getArticleImage = (category: string) => {
  const images: Record<string, string> = {
    'Lingkungan': '/images/environment.svg',
    'Tips': '/images/tips.svg',
    'Berita': '/images/news.svg'
  }
  return images[category] || '/images/default-article.svg'
}

const getExcerpt = (content?: string, length: number = 100) => {
  if (!content) return ''
  return content.length > length ? content.substring(0, length) + '...' : content
}

const formatDate = (dateString?: string) => {
  if (!dateString) return '-'
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return dateString
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.article-card {
  background: var(--color-background);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(16,24,40,0.08);
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  animation: slideUpFade 0.6s ease-out both;
  border: 2px solid transparent;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(46,125,50,0.15);
  border-color: rgba(46,125,50,0.2);
}

.article-card:active {
  transform: translateY(-8px) scale(1.01);
}

.article-image {
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4f0 0%, #e8f5e9 100%);
  position: relative;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.article-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(46,125,50,0.1), transparent);
  pointer-events: none;
}

.article-content {
  padding: 1.5rem;
}

.article-category {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  color: #1b5e20;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  display: inline-block;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(46,125,50,0.15);
  transition: all 0.3s ease;
}

.article-card:hover .article-category {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46,125,50,0.25);
}

.article-title {
  color: #2e7d32;
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
  line-height: 1.4;
}

.article-excerpt {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.read-more-btn {
  background: transparent;
  color: #2e7d32;
  border: 2px solid #2e7d32;
  padding: 0.65rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.read-more-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(46,125,50,0.1);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.read-more-btn:hover {
  background: #2e7d32;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(46,125,50,0.3);
}

.read-more-btn:hover::before {
  width: 300px;
  height: 300px;
}

.read-more-btn:active {
  transform: translateY(0);
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>