<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <h1 class="text-slide-up">Selamat Datang di Tunas Hijau</h1>
        <p class="text-fade">Mari bersama menjaga dan melestarikan lingkungan demi masa depan yang lebih baik.</p>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Aktivitas Kami</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Penanaman Pohon</h3>
            <p>Program penanaman pohon secara berkala di berbagai lokasi</p>
          </div>
          <div class="feature-card">
            <h3>Edukasi Lingkungan</h3>
            <p>Penyuluhan dan workshop tentang pentingnya menjaga lingkungan</p>
          </div>
          <div class="feature-card">
            <h3>Kampanye Hijau</h3>
            <p>Gerakan sosial untuk meningkatkan kesadaran lingkungan</p>
          </div>
        </div>
      </div>
    </section>

    <section class="upcoming-events">
      <div class="container">
        <h2>Kegiatan Mendatang</h2>
        <EventList :events="upcomingEvents" />
      </div>
    </section>

   
    <section class="quick-tips">
      <div class="container">
        <h2>Tips Ramah Lingkungan</h2>
        <div class="tips-preview">
          <TipCard
            icon="💡"
            title="Hemat Energi"
            description="Gunakan lampu LED untuk menghemat 75% energi dan biaya listrik Anda."
            category="Rumah"
          />
          <TipCard
            icon="🚴"
            title="Transportasi Hijau"
            description="Naik sepeda atau jalan kaki untuk perjalanan dekat mengurangi emisi 100%."
            category="Transportasi"
          />
          <TipCard
            icon="🥗"
            title="Makan Berkelanjutan"
            description="Kurangi daging dan pilih makanan lokal untuk mengurangi jejak karbon."
            category="Makanan"
          />
          <TipCard
            icon="♻️"
            title="Daur Ulang"
            description="Pisahkan sampah organik, plastik, dan kertas untuk daur ulang yang lebih baik."
            category="Belanja"
          />
        </div>
        <div class="tips-cta">
          <router-link to="/tips?scroll=tips" class="tips-link">Lihat Semua Tips →</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
import EventList from '@/components/ui/EventList.vue'
import TipCard from '@/components/ui/TipCard.vue'

const appStore = useAppStore()
const upcomingEvents = computed(() => appStore.upcomingEvents.slice(0, 3))
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, rgba(27,94,32,0.8) 0%, rgba(46,125,50,0.8) 100%), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(76,175,80,0.2), transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.8s ease-out;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.2;
  animation: fadeInDown 0.8s ease-out 0.2s both;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out 0.4s both;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

.cta-button {
  background: white;
  color: #1b5e20;
  border: 3px solid white;
  padding: 1rem 2.5rem;
  font-size: 1.15rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 800;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  box-shadow: 0 8px 25px rgba(255,255,255,0.3);
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(46,125,50,0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  z-index: -1;
}

.cta-button:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 35px rgba(255,255,255,0.4);
}

.cta-button:hover::before {
  width: 400px;
  height: 400px;
}

.cta-button:active {
  transform: translateY(-2px) scale(1.02);
}

.features {
  padding: 4rem 2rem;
  background: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #2e7d32;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(16,24,40,0.08);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  animation: slideUpFade 0.6s ease-out both;
  cursor: pointer;
}

.feature-card:nth-child(1) {
  animation-delay: 0.1s;
}

.feature-card:nth-child(2) {
  animation-delay: 0.2s;
}

.feature-card:nth-child(3) {
  animation-delay: 0.3s;
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(46,125,50,0.15);
  border-color: rgba(46,125,50,0.2);
}

.feature-card:active {
  transform: translateY(-8px) scale(1.01);
}

.feature-card h3 {
  color: #1b5e20;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 800;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.upcoming-events {
  padding: 5rem 2rem;
  background: white;
}

.upcoming-events > .container > h2 {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.8rem;
  color: #1b5e20;
  font-weight: 800;
  letter-spacing: -0.5px;
  animation: fadeIn 0.6s ease-out;
}

.quick-tips {
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, rgba(200,230,201,0.3) 0%, rgba(232,245,233,0.5) 100%);
}

.quick-tips h2 {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.8rem;
  color: #1b5e20;
  font-weight: 800;
  letter-spacing: -0.5px;
  animation: fadeIn 0.6s ease-out;
}

.tips-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.tips-cta {
  text-align: center;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.tips-link {
  display: inline-block;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 20px rgba(46,125,50,0.3);
  letter-spacing: 0.5px;
}

.tips-link:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 30px rgba(46,125,50,0.4);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
</style>