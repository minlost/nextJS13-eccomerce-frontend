"use client"

import CustomCodeRenderer from "@/libs/renderers/CustomCodeRenderer"
import { FC } from "react"
import dynamic from "next/dynamic"

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
)

interface EditorOutputProps {
  content: any
}

const renderers = {
  code: CustomCodeRenderer,
}

const style = {
  paragraph: {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
  },
}

const ArticleOutput: FC<EditorOutputProps> = ({ content }) => {
  return (
    <div className="  w-full  ">
      <Output style={style} renderers={renderers} data={content} />
    </div>
  )
}

export default ArticleOutput
