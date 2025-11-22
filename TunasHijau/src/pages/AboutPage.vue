<template>
  <div class="about-page">
    <div class="container">
      <section class="about-hero">
        <h1>Tentang Tunas Hijau</h1>
        <p>Organisasi peduli lingkungan yang berfokus pada pelestarian alam dan edukasi lingkungan</p>
      </section>

      <section class="about-content">
        <div class="about-grid">
          <div class="about-text">
            <h2>Visi Kami</h2>
            <p>Menjadi pionir dalam gerakan pelestarian lingkungan di Indonesia untuk menciptakan bumi yang lebih hijau dan berkelanjutan.</p>
            
            <h2>Misi Kami</h2>
            <ul>
              <li>Melakukan aksi nyata penanaman pohon dan penghijauan</li>
              <li>Mengedukasi masyarakat tentang pentingnya lingkungan</li>
              <li>Mengkampanyekan gaya hidup ramah lingkungan</li>
              <li>Berpartisipasi dalam program konservasi alam</li>
            </ul>
          </div>
          <div class="about-image">
            <img src="/images/about.svg" alt="About Tunas Hijau" />
          </div>
        </div>
      </section>

      <section class="team-section">
        <h2>Tim Kami</h2>
        <div class="team-grid">
          <div class="team-member">
            <h3>Muhamad Akbar</h3>
            <p>Ketua Organisasi</p>
          </div>
          <div class="team-member">
            <h3>Nava Aulia</h3>
            <p>Koordinator Program</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-page {
  padding: 2rem 0;
}

.about-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border-radius: 14px;
  margin-bottom: 4rem;
  animation: fadeIn 0.6s ease-out;
  box-shadow: 0 8px 20px rgba(46,125,50,0.1);
}

.about-hero h1 {
  color: #1b5e20;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  animation: fadeInDown 0.7s ease-out 0.1s both;
}

.about-hero p {
  font-size: 1.1rem;
  color: #555;
  animation: fadeInUp 0.7s ease-out 0.2s both;
  line-height: 1.6;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.about-text h2 {
  color: #1b5e20;
  margin-bottom: 1rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: 800;
  animation: fadeInLeft 0.6s ease-out;
}

.about-text p {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
}

.about-text ul {
  list-style-position: inside;
  margin-left: 0;
}

.about-text li {
  margin-bottom: 0.8rem;
  color: #666;
  line-height: 1.6;
}

.about-image {
  animation: fadeInRight 0.6s ease-out;
}

.about-image img {
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(46,125,50,0.15);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.about-image:hover img {
  transform: scale(1.05);
  filter: brightness(1.08);
}

.team-section {
  text-align: center;
  padding: 3rem 0;
}

.team-section h2 {
  color: #1b5e20;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 800;
  animation: fadeIn 0.6s ease-out;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(16,24,40,0.08);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  animation: slideUpFade 0.6s ease-out both;
}

.team-member:nth-child(1) {
  animation-delay: 0.1s;
}

.team-member:nth-child(2) {
  animation-delay: 0.2s;
}

.team-member:nth-child(3) {
  animation-delay: 0.3s;
}

.team-member:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 40px rgba(46,125,50,0.2);
  border-color: rgba(46,125,50,0.2);
}

.team-member h3 {
  color: #1b5e20;
  margin-bottom: 0.5rem;
  font-weight: 800;
}

.team-member p {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>