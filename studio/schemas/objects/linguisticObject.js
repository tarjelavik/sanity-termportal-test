import {editorialState, accessState} from '../props'
import {defaultFieldsets} from '../fieldsets'

export default {
  name: 'linguisticObject',
  title: 'Tekst',
  titleEN: 'Text',
  type: 'object',
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'textType'}],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Tekst',
      titleEN: 'Body',
      type: 'blockContent',
    },
    {
      name: 'language',
      title: 'Språk',
      titleEN: 'Language',
      type: 'reference',
      to: [{type: 'language'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Kategorier',
      titleEN: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'textType'}],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Publikasjonsdato',
      titleEN: 'Published at',
      description: 'This can be used to schedule post for publishing',
      type: 'datetime',
    },
    {
      name: 'documentedIn',
      title: 'Dokumentert i',
      titleEN: 'Documented in',
      type: 'array',
      of: [
        {
          type: 'file',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'hasType.0.label.nor',
      blocks: 'body',
      lang: 'language.label.nor',
    },
    prepare(selection) {
      const {title, blocks, lang} = selection
      const block = blocks[0]

      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No description',
        subtitle: `${title} ${lang ? 'på ' + lang : ''}`,
      }
    },
  },
}
