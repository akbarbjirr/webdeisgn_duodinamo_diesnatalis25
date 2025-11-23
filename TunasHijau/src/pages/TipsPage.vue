<template>
  <div class="tips-page">
    <section class="tips-hero">
      <div class="hero-content">
        <h1 class="text-slide-up">Tips Menjaga Lingkungan</h1>
        <p class="text-fade">Kumpulan tips praktis sehari-hari untuk menjaga kelestarian alam dan mengurangi jejak ekologis.</p>
      </div>
    </section>

    <section class="tips-container">
      <div class="container">
        <!-- Tips Categories -->
        <div class="category-tabs">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['category-btn', { active: selectedCategory === cat }]"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Tips Grid -->
        <div class="tips-grid">
          <TipCard
            v-for="tip in filteredTips"
            :key="tip.id"
            :icon="tip.icon"
            :title="tip.title"
            :description="tip.description"
            :category="tip.category"
          />
        </div>
      </div>
    </section>

    
    <section class="facts-section">
      <div class="container">
        <h2>Fakta Lingkungan</h2>
        <div class="facts-grid">
          <div v-for="fact in facts" :key="fact.id" class="fact-card">
            <div class="fact-number">{{ fact.number }}</div>
            <div class="fact-text">{{ fact.text }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TipCard from '@/components/ui/TipCard.vue'

interface Tip {
  id: number
  icon: string
  title: string
  description: string
  category: string
}

const selectedCategory = ref('Semua')

const categories = ['Semua', 'Rumah', 'Transportasi', 'Makanan', 'Belanja', 'Air']

const tips: Tip[] = [
  // Rumah
  {
    id: 1,
    icon: '💡',
    title: 'Gunakan Lampu LED',
    description: 'Lampu LED menggunakan 75% lebih sedikit energi dan bertahan 25x lebih lama dari lampu pijar biasa.',
    category: 'Rumah'
  },
  {
    id: 2,
    icon: '🚿',
    title: 'Hemat Air di Kamar Mandi',
    description: 'Mandi 5 menit dapat menghemat hingga 12.5 gallon air. Matikan shower saat menggosok gigi.',
    category: 'Rumah'
  },
  {
    id: 3,
    icon: '♻️',
    title: 'Pisahkan Sampah',
    description: 'Pisahkan sampah organik, plastik, dan kertas untuk memudahkan daur ulang.',
    category: 'Rumah'
  },
  {
    id: 4,
    icon: '🌡️',
    title: 'Atur Suhu AC & Pemanas',
    description: 'Setiap derajat yang diturunkan/naikan dapat menghemat 3-5% energi per jam.',
    category: 'Rumah'
  },

  // Transportasi
  {
    id: 5,
    icon: '🚴',
    title: 'Naik Sepeda atau Jalan Kaki',
    description: 'Untuk jarak dekat, naik sepeda atau jalan kaki mengurangi emisi karbon hingga 100%.',
    category: 'Transportasi'
  },
  {
    id: 6,
    icon: '🚌',
    title: 'Gunakan Transportasi Umum',
    description: 'Menggunakan bus/kereta mengurangi emisi karbon per orang hingga 75% dibanding mobil pribadi.',
    category: 'Transportasi'
  },
  {
    id: 7,
    icon: '🚗',
    title: 'Berkendara Efisien',
    description: 'Hindari akselerasi mendadak dan periksa tekanan ban untuk mengurangi konsumsi bahan bakar.',
    category: 'Transportasi'
  },
  {
    id: 8,
    icon: '✈️',
    title: 'Kurangi Penerbangan',
    description: 'Satu penerbangan jauh menghasilkan emisi karbon setara dengan mengemudi 2,000 mil.',
    category: 'Transportasi'
  },

  // Makanan
  {
    id: 9,
    icon: '🥗',
    title: 'Kurangi Daging',
    description: 'Produksi daging sapi menghasilkan 5x lebih banyak gas rumah kaca dibanding sayuran.',
    category: 'Makanan'
  },
  {
    id: 10,
    icon: '🥬',
    title: 'Pilih Makanan Lokal',
    description: 'Makanan lokal mengurangi emisi dari transportasi dan mendukung petani lokal.',
    category: 'Makanan'
  },
  {
    id: 11,
    icon: '🍎',
    title: 'Beli Produk Organik',
    description: 'Produk organik tidak menggunakan pestisida sintetis yang merusak tanah dan air.',
    category: 'Makanan'
  },
  {
    id: 12,
    icon: '🌾',
    title: 'Kurangi Limbah Makanan',
    description: 'Perencanaan menu dan komposting dapat mengurangi limbah makanan hingga 50%.',
    category: 'Makanan'
  },

  // Belanja
  {
    id: 13,
    icon: '🛍️',
    title: 'Belanja Barang Bekas',
    description: 'Membeli barang bekas mengurangi produksi baru dan limbah hingga 70%.',
    category: 'Belanja'
  },
  {
    id: 14,
    icon: '👕',
    title: 'Pilih Fashion Berkelanjutan',
    description: 'Industri fashion adalah penyumbang polusi terbesar. Pilih brand yang sustainable.',
    category: 'Belanja'
  },
  {
    id: 15,
    icon: '🛒',
    title: 'Bawa Tas Belanja Sendiri',
    description: 'Tas plastik sekali pakai membutuhkan 500+ tahun untuk terurai di alam.',
    category: 'Belanja'
  },
  {
    id: 16,
    icon: '📦',
    title: 'Beli Produk Ramah Lingkungan',
    description: 'Pilih produk dengan kemasan dapat didaur ulang atau biodegradable.',
    category: 'Belanja'
  },

  // Air
  {
    id: 17,
    icon: '💧',
    title: 'Jangan Buang Air',
    description: 'Air yang digunakan untuk mencuci bisa digunakan kembali untuk menyiram tanaman.',
    category: 'Air'
  },
  {
    id: 18,
    icon: '🚰',
    title: 'Gunakan Filter Air Rumah',
    description: 'Filter air mengurangi kebutuhan botol plastik dan menghemat biaya air minum.',
    category: 'Air'
  },
  {
    id: 19,
    icon: '🌿',
    title: 'Tanam Pohon untuk Air',
    description: 'Pohon membantu menyerap air hujan dan mencegah banjir di area perkotaan.',
    category: 'Air'
  },
  {
    id: 20,
    icon: '🐟',
    title: 'Lindungi Sumber Air',
    description: 'Tidak membuang limbah sembarangan menjaga kualitas air untuk semua makhluk hidup.',
    category: 'Air'
  }
]

const facts = [
  { id: 1, number: '7.8M', text: 'Ton plastik masuk ke lautan setiap tahun' },
  { id: 2, number: '1M', text: 'Spesies terancam punah dalam beberapa dekade' },
  { id: 3, number: '50%', text: 'Hutan dunia sudah hilang karena deforestasi' },
  { id: 4, number: '2,400', text: 'Liter air dibutuhkan untuk produksi 1 kg daging' },
  { id: 5, number: '40%', text: 'Makanan global terbuang sia-sia' },
  { id: 6, number: '99%', text: 'Spesies yang punah adalah karena aktivitas manusia' }
]

const filteredTips = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return tips
  }
  return tips.filter(tip => tip.category === selectedCategory.value)
})
</script>

<style scoped>
.tips-page {
  min-height: 100vh;
}

.tips-hero {
  background: linear-gradient(135deg, rgba(27,94,32,0.9) 0%, rgba(46,125,50,0.9) 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  animation: fadeIn 0.6s ease-out;
}

.tips-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
  animation: fadeInDown 0.8s ease-out 0.1s both;
}

.tips-hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.tips-container {
  padding: 4rem 2rem;
}

.category-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.category-btn {
  background: white;
  border: 2px solid #e0e0e0;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  color: #666;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.category-btn:hover {
  border-color: #4caf50;
  color: #4caf50;
  transform: translateY(-2px);
}

.category-btn.active {
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  border-color: transparent;
  box-shadow: 0 6px 20px rgba(46,125,50,0.3);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.facts-section {
  background: linear-gradient(to bottom, #f5f5f5, #fafafa);
  padding: 4rem 2rem;
}

.facts-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #1b5e20;
  margin-bottom: 3rem;
  font-weight: 800;
  animation: fadeIn 0.6s ease-out;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.fact-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(16,24,40,0.08);
  transition: all 0.3s ease;
  animation: slideUpFade 0.6s ease-out both;
  border-top: 3px solid #4caf50;
}

.fact-card:nth-child(1) {
  animation-delay: 0.1s;
}

.fact-card:nth-child(2) {
  animation-delay: 0.2s;
}

.fact-card:nth-child(3) {
  animation-delay: 0.3s;
}

.fact-card:nth-child(4) {
  animation-delay: 0.4s;
}

.fact-card:nth-child(5) {
  animation-delay: 0.5s;
}

.fact-card:nth-child(6) {
  animation-delay: 0.6s;
}

.fact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(46,125,50,0.15);
  border-top-color: #1b5e20;
}

.fact-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.fact-text {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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
