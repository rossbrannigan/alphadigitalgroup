import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newSchema',
  title: 'New Schema',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    // Add more fields as needed
  ],
})