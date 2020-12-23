import {timespan, referredToBy} from '../props'
import {defaultFieldsets} from '../fieldsets'

export default {
  name: 'name',
  title: 'Navn',
  titleEN: 'Name',
  type: 'object',
  fieldsets: defaultFieldsets,
  fields: [
    {
      name: 'content',
      title: 'Navn',
      titleEN: 'Name',
      type: 'string',
    },
    /* {
      name: 'hasType',
      title: 'Type',
      titleEN: 'Type',
      type: 'reference',
      to: [{type: 'appelationType'}],
    }, */
    {
      name: 'language',
      title: 'Språk',
      titleEN: 'Language',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'language'}]}],
    },
    referredToBy,
  ],
  preview: {
    select: {
      title: 'content',
      /* type: 'hasType.label.nob', */
      lang: 'language.0.label.nob',
    },
    prepare(selection) {
      const {title, lang} = selection
      return {
        title: title,
        subtitle: lang,
      }
    },
  },
}
