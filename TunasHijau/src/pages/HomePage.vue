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
import TipCard from '@/components/ui/TipCard.vue'

</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, rgba(27,94,32,0.85) 0%, rgba(46,125,50,0.85) 100%), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1.5rem;
    min-height: 350px;
    background-attachment: scroll;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 3rem 1rem;
    min-height: 280px;
  }
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
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.2;
  animation: fadeInDown 0.8s ease-out 0.2s both;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 640px) {
  .hero-content h1 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
}

.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out 0.4s both;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.15);
  font-weight: 300;
}

@media (max-width: 768px) {
  .hero-content p {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 640px) {
  .hero-content p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
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

@media (max-width: 768px) {
  .features {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .features {
    padding: 2rem 1rem;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  color: var(--color-primary);
  font-weight: 700;
}

@media (max-width: 768px) {
  .features h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .features h2 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  animation: slideUpFade 0.6s ease-out both;
  cursor: pointer;
}

@media (max-width: 640px) {
  .feature-card {
    padding: 1.5rem 1rem;
    animation: none;
  }
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
  box-shadow: var(--shadow-lg);
  border-color: rgba(46,125,50,0.2);
}

.feature-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
}

@media (max-width: 640px) {
  .feature-card h3 {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .feature-card p {
    font-size: 0.8rem;
    line-height: 1.4;
  }
}

.upcoming-events {
  padding: 4rem 2rem;
  background: #fafafa;
  border-radius: 12px;
  margin: 2rem 0;
}

.upcoming-events > .container > h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  color: var(--color-primary);
  font-weight: 700;
}

.quick-tips {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(46,125,50,0.05) 0%, rgba(102,187,106,0.05) 100%);
  border-radius: 12px;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .quick-tips {
    padding: 2.5rem 1.5rem;
    margin: 1.5rem 0;
  }
}

@media (max-width: 640px) {
  .quick-tips {
    padding: 2rem 1rem;
    margin: 1rem 0;
  }
}

.quick-tips h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  color: var(--color-primary);
  font-weight: 700;
}

@media (max-width: 768px) {
  .quick-tips h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .quick-tips h2 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
}

.tips-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .tips-preview {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .tips-preview {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
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

@media (max-width: 640px) {
  .tips-link {
    padding: 0.75rem 2rem;
    font-size: 0.9rem;
  }
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