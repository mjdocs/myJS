import { IChildren } from '@site/src/types/interfaces'
import style from './style.module.scss'
import useQuote from '@site/src/hooks/useQuote'

interface IBlockQuote extends IChildren {
    id: number
}

const BlockQuote = ({ id, children }: IBlockQuote) => {
    const { quote, author, cite, url } = useQuote(id)

    return (
        <figure className={style['blockqoute-wrapper']}>
            <blockquote className={style.blockqoute}>
                <p className={style.blockqoute__quote}>{quote}</p>
            </blockquote>
            <figcaption className={style.blockqoute__author}>
                <p>— {author}, </p>
                <cite>
                    <a href={url} target='_blank'>
                        {cite}
                    </a>
                </cite>
                {children}
            </figcaption>
        </figure>
    )
}

export default BlockQuote
