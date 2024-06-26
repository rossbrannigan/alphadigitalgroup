import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tutorial', value: 'tutorial' },
          { title: 'Review', value: 'review' },
          { title: 'Interview', value: 'interview' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Other', value: 'other' },
          { title: 'Infotainer', value: 'infotainer' }, // Add new category here
        ],
      }
    }),
    defineField({
      name: 'thumbnailUrl',
      title: 'Thumbnail URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnailUrl',
    },
    prepare(selection) {
      const { title, media } = selection

      // Ensure media is a valid URL if present
      const mediaUrl = media && typeof media === 'string' && media.startsWith('http') ? media : undefined

      return {
        title: title,
        media: mediaUrl ? { src: mediaUrl } : undefined,
      }
    },
  },
})
