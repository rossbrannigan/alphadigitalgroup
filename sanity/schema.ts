import { type SchemaTypeDefinition } from 'sanity'
import youtubeSchema from './youtubeSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    youtubeSchema,
  ],
}