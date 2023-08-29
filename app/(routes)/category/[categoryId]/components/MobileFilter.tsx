"use client"
import Button from "@/components/ui/Buttons"
import IconButton from "@/components/ui/IconButton"
import { Color, Size } from "@/types/types"
import { Dialog } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { FC, useState } from "react"
import Filter from "./Filter"

interface MobileFilterProps {
  sizes: Size[]
  colors: Color[]
}

const MobileFilter: FC<MobileFilterProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden text-white"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog open={open} onClose={onClose} as="div">
        <div className="fixed inset-0 z-40 flex bg-black bg-opacity-40">
          <Dialog.Panel className="relative ml-auto flex g-full w-full max-w-xl flex-col overflow-auto bg-white pb-6 shadow-xl">
            {/* Close Button */}
            <div className="flex mt-4 items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilter
