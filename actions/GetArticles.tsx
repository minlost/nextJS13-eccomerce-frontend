import { Article } from "@/types/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}`

const getArticle = async (): Promise<Article[]> => {
  const res = await fetch(`${URL}/articles`)
  const data = await res.json()
  return data
}

export default getArticle
