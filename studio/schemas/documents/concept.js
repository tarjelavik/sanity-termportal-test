export default {
  name: 'concept',
  type: 'document',
  title: 'Concept',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'prefLabel',
      title: 'Preferred label',
      type: 'array',
      of: [{type: 'name'}],
    },
    {
      name: 'altLabel',
      title: 'Alternative label',
      type: 'array',
      of: [{type: 'name'}],
    },
    {
      name: 'definition',
      title: 'Definition',
      type: 'array',
      of: [{type: 'definition'}],
    },
/*     {
      name: 'identifier',
      title: 'Identifier',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'identifierType'}]}]
    }, */
    {
      name: 'memberOf',
      title: 'Member of',
      type: 'reference', to: [{type: 'collection'}]
    },
  ],
  preview: {
    select: {
      title: 'label',
    }
  }
}

