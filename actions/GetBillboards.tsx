import { Billboard, Category } from "@/types/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboards = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`)
  const data = await res.json()
  return data
}

export default getBillboards
