<template>
  <div class="events-page">
    <div class="container">
      <section class="events-header">
        <h1>Kegiatan Tunas Hijau</h1>
        <p>Ikuti berbagai kegiatan lingkungan yang kami selenggarakan</p>
      </section>

      <section class="events-filter">
        <div class="filter-controls">
          <button 
            v-for="filter in filters" 
            :key="filter"
            :class="['filter-btn', { active: activeFilter === filter }]"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </section>

      <section class="events-list">
        <EventList :events="filteredEvents" />
      </section>

      <section class="event-stats">
        <div class="stats-grid">
          <div class="stat-card">
            <h3>50+</h3>
            <p>Kegiatan Dilakukan</p>
          </div>
          <div class="stat-card">
            <h3>1000+</h3>
            <p>Pohon Tertanam</p>
          </div>
          <div class="stat-card">
            <h3>500+</h3>
            <p>Relawan Aktif</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
import EventList from '@/components/ui/EventList.vue'

const appStore = useAppStore()
const activeFilter = ref<string>('Semua')

const filters = ['Semua', 'Akan Datang', 'Selesai']

const filteredEvents = computed(() => {
  const now = new Date()
  switch (activeFilter.value) {
    case 'Akan Datang':
      return appStore.events.filter(event => new Date(event.date) >= now)
    case 'Selesai':
      return appStore.events.filter(event => new Date(event.date) < now)
    default:
      return appStore.events
  }
})
</script>

<style scoped>
.events-page {
  padding: 2rem 0;
}

.events-header {
  text-align: center;
  margin-bottom: 3rem;
}

.events-header h1 {
  color: #2e7d32;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.events-filter {
  margin-bottom: 2rem;
}

.filter-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #2e7d32;
  background: white;
  color: #2e7d32;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn.active,
.filter-btn:hover {
  background: #2e7d32;
  color: white;
}

.event-stats {
  margin-top: 4rem;
  padding: 3rem 0;
  background: #f5f5f5;
  border-radius: 10px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-card h3 {
  font-size: 2.5rem;
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.stat-card p {
  color: #666;
  font-weight: 500;
}
</style>