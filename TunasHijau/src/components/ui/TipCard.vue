<template>
  <div class="tip-card">
    <div class="tip-icon">
      <span>{{ icon }}</span>
    </div>
    <div class="tip-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span v-if="category" class="tip-category">{{ category }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  category?: string
}

defineProps<Props>()
</script>

<style scoped>
.tip-card {
  background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  border-left: 4px solid #4caf50;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  animation: slideInLeft 0.6s ease-out;
  cursor: pointer;
}

.tip-card:hover {
  transform: translateX(8px);
  box-shadow: 0 6px 16px rgba(46,125,50,0.1);
  background: linear-gradient(135deg, #f0f4f0 0%, #f5f8f5 100%);
  border-left-color: #2e7d32;
}

.tip-icon {
  font-size: 2rem;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(76,175,80,0.1);
  border-radius: 8px;
  height: fit-content;
  padding: 0.5rem;
}

.tip-content h3 {
  color: #1b5e20;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.tip-content p {
  color: #666;
  margin: 0 0 0.75rem 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.tip-category {
  display: inline-block;
  background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
  color: #1b5e20;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
