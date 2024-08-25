import { useState } from 'react'
import { IBlockQuoteProps } from '../types/interfaces'
import { QUOTES } from '../utils/quotes'

const useQuote = (id: number): IBlockQuoteProps => {
    const [allQuotes, setQuotes] = useState<IBlockQuoteProps>(QUOTES[id])

    return allQuotes
}

export default useQuote
