import { IBlockQuoteProps } from '../types/interfaces'

export const QUOTES = [
    {
        id: 0,
        quote: '«The World’s Most Misunderstood Programming Language Has Become the World’s Most Popular Programming Language».',
        author: 'Douglas Crockford',
        cite: 'an article, 2008',
        url: 'https://crockford.com/javascript/popular.html',
    },
    {
        id: 1,
        quote: '«Success has many fathers».',
        author: 'slogan',
        cite: 'first Ecma JS meeting, 1996',
        url: 'https://brendaneich.com/2011/06/new-javascript-engine-module-owner',
    },
    {
        id: 2,
        quote: '«Even if you know JavaScript, reading its language specification ... can be pretty daunting».',
        author: 'Marja Hölttä',
        cite: 'v8 blog, 2020',
        url: 'https://v8.dev/blog/understanding-ecmascript-part-1',
    },
    {
        id: 3,
        quote: '«JS is not going away, so it ought to evolve. As with sharks ... a programming language is either moving forward, or it’s dead».',
        author: 'Brendan Eich',
        cite: 'his blog, 2005',
        url: 'https://brendaneich.com/2005/06/javascript-1-2-and-in-between/',
    },
    {
        id: 4,
        quote: '«Language is a city to the building of which every human being brought a stone».',
        author: 'Ralph Waldo Emerson',
        cite: 'книга «Letters and Social Aims», 1875',
        url: 'https://commons.wikimedia.org/w/index.php?title=File%3ALetters_and_social_aims_(IA_letterssocial00emerrich).pdf&page=1',
    },
] satisfies Array<IBlockQuoteProps>
