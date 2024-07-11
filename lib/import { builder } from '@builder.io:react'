import { builder } from '@builder.io/react'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export const getBuilderContent = async (modelName: string, slug: string) => {
  const content = await builder
    .get(modelName, {
      query: {
        'data.slug': slug,
      },
    })
    .promise()

  return content
}