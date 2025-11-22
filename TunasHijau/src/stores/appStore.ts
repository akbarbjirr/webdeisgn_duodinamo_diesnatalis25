import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Event, Article } from '@/types'

export const useAppStore = defineStore('app', () => {
  const isoDate = (d: Date): string => {
    const parts = d.toISOString().split('T')
    return parts[0] || ''
  }

  // provide an initial upcoming event using a date relative to now
  const events = ref<Event[]>([
    {
      id: 1,
      title: 'Penanaman Pohon Massal',
      description: 'Aksi penanaman 1000 pohon di area perkotaan',
      date: isoDate(new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)),
      location: 'Taman Kota Jakarta',
      image: '/images/event1.svg'
    }
  ])

  const articles = ref<Article[]>([
    {
      id: 1,
      title: 'Pentingnya Menjaga Kelestarian Alam',
      content: 'Pelestarian alam adalah tanggung jawab kita bersama. Setiap ekosistem memiliki peran penting dalam menjaga keseimbangan planet. Dengan menjaga hutan, laut, dan satwa liar, kita juga menjaga masa depan generasi mendatang.',
      author: 'Admin Tunas Hijau',
      date: '2024-11-20',
      category: 'Lingkungan'
    },
    {
      id: 2,
      title: 'Energi Terbarukan: Solusi Masa Depan',
      content: 'Energi terbarukan seperti solar, angin, dan hidroelektrik menawarkan alternatif bersih dari bahan bakar fosil. Investasi dalam teknologi hijau tidak hanya mengurangi emisi karbon tetapi juga menciptakan lapangan kerja baru.',
      author: 'Admin Tunas Hijau',
      date: '2024-11-18',
      category: 'Tips'
    },
    {
      id: 3,
      title: 'Plastik: Ancaman Nyata bagi Laut',
      content: 'Lebih dari 8 juta ton plastik masuk ke lautan setiap tahun. Sampah plastik membunuh jutaan hewan laut dan menciptakan pulau sampah raksasa. Mengurangi penggunaan plastik adalah langkah pertama menuju laut yang lebih sehat.',
      author: 'Admin Tunas Hijau',
      date: '2024-11-15',
      category: 'Berita'
    },
    {
      id: 4,
      title: 'Pertanian Berkelanjutan untuk Ketahanan Pangan',
      content: 'Pertanian organik dan berkelanjutan tidak hanya lebih baik untuk lingkungan tetapi juga menghasilkan makanan yang lebih sehat. Dengan mengurangi pestisida dan pupuk sintetis, kita melindungi tanah dan air.',
      author: 'Admin Tunas Hijau',
      date: '2024-11-12',
      category: 'Tips'
    }
  ])

  const addEvent = (event: Event) => {
    events.value.push(event)
  }

  const addArticle = (article: Article) => {
    articles.value.push(article)
  }

  const upcomingEvents = computed(() => {
    return events.value.filter(event => new Date(event.date) >= new Date())
  })

  return {
    events,
    articles,
    addEvent,
    addArticle,
    upcomingEvents
  }
})