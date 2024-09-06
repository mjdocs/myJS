export interface IBlockQuoteProps {
    id?: number
    quote: string
    author: string
    cite: string
    url: string
}

export interface ILinkedImage {
    id?: number
    url: string
    src: string
    alt: string
}

export interface IChildren {
    children: React.ReactNode
}

export interface IClassName {
    className: string
}

export interface IContent {
    content: string
}
