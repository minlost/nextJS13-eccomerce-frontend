import { FC } from "react"

interface CotainerProps {
  children: React.ReactNode
}

const Container: FC<CotainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl w-full flex-shrink-0">{children}</div>
  )
}

export default Container
