<template>
  <div class="contact-page">
    <div class="container">
      <section class="contact-header">
        <h1>Hubungi Kami</h1>
        <p>Silakan hubungi kami untuk informasi lebih lanjut</p>
      </section>

      <div class="contact-content">
        <section class="contact-info">
          <div class="info-card">
            <h3>Alamat</h3>
            <p>Jl. Lingkungan Hijau No. 123<br>Jakarta Selatan, 12345</p>
          </div>
          <div class="info-card">
            <h3>Email</h3>
            <p>info@tunashijau.org</p>
          </div>
          <div class="info-card">
            <h3>Telepon</h3>
            <p>(021) 123-4567</p>
          </div>
          <div class="info-card">
            <h3>Jam Operasional</h3>
            <p>Senin - Jumat: 08:00 - 17:00</p>
          </div>
        </section>


      </div>

      <section class="map-section">
        <h2>Lokasi Kami</h2>
        <div class="map-placeholder">
          <p>📍 Peta akan ditampilkan di sini</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact-page {
  padding: 2rem 0;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  color: #2e7d32;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.contact-info {
  display: grid;
  gap: 1.5rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.info-card h3 {
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.map-section {
  text-align: center;
}

.map-section h2 {
  color: #2e7d32;
  margin-bottom: 2rem;
}

.map-placeholder {
  background: #f5f5f5;
  padding: 4rem 2rem;
  border-radius: 10px;
  color: #666;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>