// sanity/schemas/author.ts
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'bio', type: 'blockContent' },
  ],
}
