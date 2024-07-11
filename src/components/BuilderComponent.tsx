import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
import { useEffect, useState } from 'react'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

interface BuilderPageProps {
  content: any
}

export const BuilderPage = ({ content }: BuilderPageProps) => {
  const isPreviewing = useIsPreviewing()
  const [builderContent, setBuilderContent] = useState(content)

  useEffect(() => {
    if (isPreviewing) {
      const handleMessage = (event: MessageEvent) => {
        if (event.data?.type === 'builder.contentUpdate') {
          setBuilderContent(event.data?.data)
        }
      }
      window.addEventListener('message', handleMessage)
      return () => window.removeEventListener('message', handleMessage)
    }
  }, [isPreviewing])

  return (
    <>
      <BuilderComponent
        model="page"
        content={builderContent}
      />
    </>
  )
}