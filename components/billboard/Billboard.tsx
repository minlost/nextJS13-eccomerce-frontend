import { Billboard as BillboardTypes } from "@/types/types"
import { FC } from "react"

interface BillboardProps {
  data: BillboardTypes
}

const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-1 sm:p-1 lg:pt-2 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-gray-900">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard
