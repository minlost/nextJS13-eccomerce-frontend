import { Carousel } from "@/types/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/carousels`

const getCarousels = async (): Promise<Carousel[]> => {
  const res = await fetch(`${URL}`)
  const data = await res.json()
  return data
}

export default getCarousels
