<template>
  <div class="event-list">
    <div v-if="events.length === 0" class="no-events">
      <p>Tidak ada kegiatan yang akan datang.</p>
    </div>
    <div v-else class="events-grid">
      <div
        v-for="(event, index) in events"
        :key="event.id"
        class="event-card"
        :style="{ '--i': index }"
      >
        <div class="event-image">
          <img :src="getEventImage(event.image)" :alt="event.title" />
        </div>
        <div class="event-content">
          <h3>{{ event.title }}</h3>
          <p class="event-date">{{ formatDate(event.date) }}</p>
          <p class="event-location">{{ event.location }}</p>
          <p class="event-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Event } from '@/types'

interface Props {
  events: Event[]
}

defineProps<Props>()

const getEventImage = (imagePath?: string) => {
  if (!imagePath) return '/images/event1.svg'
  return imagePath.includes('.svg') || imagePath.includes('.jpg') ? imagePath : '/images/event1.svg'
}

const formatDate = (dateString?: string) => {
  if (!dateString) return '-'
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return dateString
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.event-list {
  width: 100%;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.event-card {
  background: var(--color-background);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(16,24,40,0.08);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  animation: slideUp 0.56s ease-out both;
  animation-delay: calc(var(--i, 0) * 80ms);
  border: 2px solid transparent;
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(46,125,50,0.15);
  border-color: rgba(46,125,50,0.2);
}

.event-card:active {
  transform: translateY(-8px) scale(1.01);
}

.event-image {
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4f0 0%, #e8f5e9 100%);
  position: relative;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.3s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.event-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(46,125,50,0.1), transparent);
  pointer-events: none;
}

.event-content {
  padding: 1.5rem;
}

.event-content h3 {
  color: #1b5e20;
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
  line-height: 1.4;
}

.event-date {
  color: #2e7d32;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.event-location {
  color: #666;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.event-location::before {
  content: '📍';
}

.event-description {
  color: #888;
  line-height: 1.5;
  font-size: 0.9rem;
}

.no-events {
  text-align: center;
  padding: 3rem 2rem;
  color: #888;
  background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
  border-radius: 12px;
  border: 2px dashed #ddd;
}

.no-events p {
  font-size: 1.1rem;
  margin: 0;
}

@keyframes slideUp {
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