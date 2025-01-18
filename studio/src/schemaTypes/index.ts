// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

// document schemas
import post from './documents/post'
import book from './documents/book'
import series from './documents/series'
import colorTheme from './documents/colorTheme'
import agent from './documents/agent'
import press from './documents/press'

// Object types
import blockContent from './objects/blockContent'
import link from './objects/link'
import mainImage from './objects/mainImage'
import introPortableText from './objects/introPortableText'
import review from './objects/review'
import pressEntry from './objects/pressEntry'
import reviewPortableText from './objects/reviewPortableText'

export const schemaTypes = [
    //document types
    post, 
    book,
    series,
    colorTheme,    
    agent,
    press,
    // Object types - can be used as { type: 'typename' }
    // in document schemas
    blockContent,
    link,
    mainImage,
    introPortableText,
    review,
    pressEntry,
    reviewPortableText,
]
