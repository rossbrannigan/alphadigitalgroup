// sanity/schemas/post.ts
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'body', type: 'blockContent' },
  ],
}
