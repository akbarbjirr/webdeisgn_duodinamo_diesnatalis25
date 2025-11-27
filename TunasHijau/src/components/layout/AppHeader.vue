<template>
  <header class="app-header">
    <nav class="nav-container">
      <div class="logo">
        <h1>Tunas Hijau</h1>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Beranda</router-link></li>
        <li><router-link to="/about">Tentang</router-link></li>
        <li><router-link to="/education">Edukasi</router-link></li>
        <li><router-link to="/tips">Tips</router-link></li>
        <li><router-link to="/articles">Artikel</router-link></li>
        <li><router-link to="/contact">Kontak</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-header {
  background: linear-gradient(90deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%);
  color: white;
  padding: 1.2rem 0;
  box-shadow: 0 6px 20px rgba(27,94,32,0.3);
  position: sticky;
  top: 0;
  z-index: 100;
  animation: slideDown 0.5s ease-out;
}

@media (max-width: 640px) {
  .app-header {
    padding: 0.8rem 0;
  }
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 640px) {
  .nav-container {
    padding: 0 0.75rem;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  transition: transform 0.3s ease, text-shadow 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .logo h1 {
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 640px) {
  .logo h1 {
    font-size: 1.2rem;
    letter-spacing: 0px;
  }
}

.logo h1:hover {
  transform: scale(1.05);
  text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1.25rem;
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
  transition: color 0.3s ease;
  letter-spacing: 0.5px;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .nav-links a {
    font-size: 0.85rem;
  }
}

@media (max-width: 640px) {
  .nav-links a {
    font-size: 0.7rem;
    padding-bottom: 0.25rem;
  }
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.router-link-active {
  color: #b3e5fc;
}

.nav-links a.router-link-active::after {
  width: 100%;
}
</style>