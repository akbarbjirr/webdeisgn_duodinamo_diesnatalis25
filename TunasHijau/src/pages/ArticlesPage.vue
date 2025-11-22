<template>
  <div class="articles-page">
    <div class="container">
      <section class="articles-header">
        <h1>Artikel Lingkungan</h1>
        <p>Informasi dan tips tentang pelestarian lingkungan</p>
      </section>

      <section class="articles-grid">
        <ArticleCard 
          v-for="article in articles" 
          :key="article.id"
          :article="article"
        />
      </section>

      <section class="newsletter">
        <div class="newsletter-content">
          <h2>Berlangganan Newsletter</h2>
          <p>Dapatkan update terbaru tentang kegiatan dan artikel lingkungan</p>
          <div class="newsletter-form">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Masukkan email Anda"
              class="email-input"
            >
            <button class="subscribe-btn" @click="subscribe">Berlangganan</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/appStore'
import ArticleCard from '@/components/ui/ArticleCard.vue'

const appStore = useAppStore()
const email = ref<string>('')
const articles = appStore.articles

const subscribe = () => {
  if (email.value) {
    alert(`Terima kasih ${email.value} telah berlangganan newsletter!`)
    email.value = ''
  }
}
</script>

<style scoped>
.articles-page {
  padding: 2rem 0;
}

.articles-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border-radius: 14px;
  animation: fadeIn 0.6s ease-out;
}

.articles-header h1 {
  color: #1b5e20;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  animation: fadeInDown 0.8s ease-out 0.1s both;
}

.articles-header p {
  color: #555;
  font-size: 1.1rem;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.newsletter {
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(27,94,32,0.2);
  animation: fadeIn 0.8s ease-out;
}

.newsletter-content h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
}

.newsletter-content p {
  font-size: 1.05rem;
  opacity: 0.95;
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto 0;
  flex-wrap: wrap;
  justify-content: center;
}

.email-input {
  flex: 1;
  min-width: 200px;
  padding: 0.85rem 1rem;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #333;
}

.email-input:focus {
  outline: none;
  border-color: #66bb6a;
  box-shadow: 0 0 10px rgba(255,255,255,0.3);
}

.subscribe-btn {
  background: white;
  color: #1b5e20;
  padding: 0.85rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  min-width: 150px;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.subscribe-btn:active {
  transform: translateY(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .newsletter-form {
    flex-direction: column;
  }
}
</style>