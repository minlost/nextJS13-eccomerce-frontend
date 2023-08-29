import { Article } from "@/types/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}`

const getArticles = async (id: string): Promise<Article> => {
  const res = await fetch(`${URL}/articles/${id}`)

  const data = await res.json()
  return data
}

export default getArticles
