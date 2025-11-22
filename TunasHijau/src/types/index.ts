export interface Event {
  id: number
  title: string
  description: string
  date: string
  location: string
  image: string
}

export interface Article {
  id: number
  title: string
  content: string
  author: string
  date: string
  category: string
}

export interface User {
  id: number
  name: string
  email: string
  role: string
}