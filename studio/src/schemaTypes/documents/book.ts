import {defineField, defineType, SlugInput} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General'
    },
    {
      name: 'promotion',
      title: 'Promotion'
    },
    {
      name: 'details',
      title: 'Details'
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'general'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      group: 'general',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField ({
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'series'}],
      group: 'general'
    }),
    defineField ({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      group: 'general'
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'mainImage',
      group: 'general'
    }),
    defineField ({
      name: 'theme',
      title: 'Color Theme',
      type: 'reference',
      group: 'general',
      to: [{type: 'colorTheme'}]
    }),
    defineField ({
      name: 'hook',
      title: 'Hook',
      type: 'introPortableText',
      description: 'Short phrase that typically shows up on the book cover and marketing material',
      group: 'details'
    }),
    defineField ({
      name: 'buyBookFrom',
      title: 'Buy book from',
      description: 'Enter short titles (e.g. Amazon) and hyperlilnks to vendor pages',
      type: 'array',
      group: 'details',
      of: [
        {
          type: 'link',
          title: 'Link'
        }
      ]
    }),
    defineField ({
      title: 'Add to Goodreads',
      name: 'addToGoodreads',
      type: 'url',
      description: 'Enter url of the GoodReads book page',
      group: 'details',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    }),
    defineField ({
      name: 'links',
      title: 'Links',
      type: 'array',
      group: 'details',
      of: [{
        type: 'link',
        title: 'Link',
      }]
    }),
    defineField ({
      name: 'publishers',
      title: 'Publisher links',
      type: 'array',
      group: 'details',
      of: [{
        type: 'link',
        title: 'Link',
      }]
    }),
    defineField ({
      name: 'agent',
      title: 'Agent',
      description: 'Agent is editable under settings content',
      type: 'reference',
      to: {type: 'agent'},
      group: 'details',
      readOnly: true
    }),
    defineField ({
      name: 'internationalCovers',
      type: 'array',
      title: 'Promotional images',
      description:
        'Add images and captions. Up to three will display alongside the Synopsis, Reviews, and Press items.',
      group: 'promotion',
      of: [{type: 'mainImage'}]
    }),
    defineField ({
      name: 'synopsis',
      type: 'introPortableText',
      title: 'Synopsis',
      group: 'promotion'
    }),
    defineField ({
      name: 'reviews',
      type: 'array',
      title: 'Reviews',
      description: '7 will display by default. Later we will add a "see more" button',
      group: 'promotion',
      of: [
        {
          type: 'review',
          title: 'Review',
        }
      ]
    }),
    defineField ({
      name: 'press',
      type: 'array',
      title: 'Press',
      group: 'promotion',
      of: [
        {
          type: 'pressEntry',
          title: 'Press Entry',
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      SlugInput: 'slug',
      media: 'cover',
    },
    prepare ({title = 'No title', slug = {}, media}) {
      const path = `/${slug.current}/`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },
})
