<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Tunas Hijau</h3>
        <p>Menjaga kelestarian alam untuk masa depan yang lebih baik.</p>
      </div>
      <div class="footer-section">
        <h4>Kontak</h4>
        <p>Email: info@tunashijau.org</p>
        <p>Telepon: (021) 123-4567</p>
      </div>
      <div class="footer-section">
        <h4>Follow Kami</h4>
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Tunas Hijau. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-footer {
  background: #1b5e20;
  color: white;
  padding: 2rem 0 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
}

.footer-section p {
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: white;
  text-decoration: none;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
}
</style>