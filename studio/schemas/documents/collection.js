export default {
  name: 'collection',
  type: 'document',
  title: 'Collection',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Tekst',
      titleEN: 'Text',
      type: 'localeBlock',
    },
    {
      name: 'identifier',
      title: 'Identifier',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'identifierType'}]}]
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'reference', to: [{type: 'group'}]
    },
  ],
  preview: {
    select: {
      title: 'label.nob',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}

