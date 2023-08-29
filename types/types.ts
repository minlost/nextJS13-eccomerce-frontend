export interface Billboard {
  id: string
  label: string
  imageUrl: string
}
export interface Carousel {
  id: string
  label?: string
  imageUrl: string
  link: string
}
export interface Carousels {
  carousels: Carousel[]
}

export interface Category {
  id: string
  name: string
  billboard: Billboard
}

export interface Product {
  id: string
  category: Category
  price: string
  isFeatured: boolean
  size: Size
  color: Color
  name: string
  images: Image[]
  quantity: any
  teststring: string
}

export interface Size {
  id: string
  name: string
  value: string
}

export interface Color {
  id: string
  name: string
  value: string
}

export interface Image {
  id: string
  url: string
}

export interface Article {
  id: string
  title: string
  content: any
  storeId: string
  userId: string
}
