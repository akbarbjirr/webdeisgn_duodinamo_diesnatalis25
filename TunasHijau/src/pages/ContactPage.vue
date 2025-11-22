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

        <section class="contact-form-section">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Nama Lengkap</label>
              <input 
                v-model="form.name"
                type="text" 
                id="name" 
                required
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                id="email" 
                required
              >
            </div>
            <div class="form-group">
              <label for="subject">Subjek</label>
              <input 
                v-model="form.subject"
                type="text" 
                id="subject" 
                required
              >
            </div>
            <div class="form-group">
              <label for="message">Pesan</label>
              <textarea 
                v-model="form.message"
                id="message" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">Kirim Pesan</button>
          </form>
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
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Simulasi pengiriman form
  alert('Terima kasih! Pesan Anda telah dikirim.')
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
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
  grid-template-columns: 1fr 1fr;
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

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4caf50;
}

.submit-btn {
  background: #2e7d32;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #1b5e20;
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