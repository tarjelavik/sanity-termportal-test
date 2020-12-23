// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import siteSettings from './documents/siteSettings'

// Object types
import mainImage from './objects/mainImage'
import localeBlock from './objects/localeBlock'
import blockContent from './objects/blockContent'
import collection from './documents/collection'
import localeString from './objects/localeString'
import identifier from './objects/identifier'
import identifierType from './documents/identifierType'
import groupType from './documents/groupType'
import group from './documents/group'
import concept from './documents/concept'
import definition from './objects/definition'
import name from './objects/name'
import language from './documents/language'
import linguisticObject from './objects/linguisticObject'
import appelationType from './documents/appelationType'
import textType from './documents/textType'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'termportal-test',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    collection,
    concept,
    definition,
    appelationType,
    name,
    language,
    identifier,
    identifierType,
    group,
    groupType,
    mainImage,
    textType,
    linguisticObject,
    localeBlock,
    localeString,
    blockContent,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
