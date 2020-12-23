export default {
  name: 'identifier',
  title: 'Identifikator',
  titleEN: 'Identifier',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Identifikator',
      titleEN: 'Identifier',
      type: 'string',
    },
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      type: 'reference',
      to: [{type: 'identifierType'}],
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'content',
      type: 'hasType.label.nor',
    },
    prepare(selection) {
      const {title, type} = selection
      return {
        title: title,
        subtitle: type,
      }
    },
  },
}
