export interface IFile {
  name: string
  sizeInBytes: number
  formate: string | number
  id?: string
  title: string
  ref: string
  price: number
  description: string
  category: string
  Image: string
  rating: { rate: number; count: number }
}
