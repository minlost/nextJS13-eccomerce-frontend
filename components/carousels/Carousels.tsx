import { Carousel } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface CarouselProps {
  data: Carousel[]
}

const Carousels: FC<CarouselProps> = ({ data }) => {
  return (
    <div className="px-1 rounded-xl overflow-hidden flex flex-col md:flex-row flex-nowrap gap-1 justify-center">
      {data.map((carousel) => (
        <Link href={carousel.link} key={carousel.id} className="w-full ">
          <div className="relative h-[100px] w-full flex justify-center items-center  ">
            <Image
              src={carousel.imageUrl}
              alt={carousel.label || "Carousel image"}
              fill
              className=" object-center object-cover rounded-md filter brightness-90 hover:brightness-100  transition-all duration-300     "
            />
            {carousel.label && (
              <h3 className="text-neutral-100 text-3xl z-10">
                {carousel.label}
              </h3>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Carousels
