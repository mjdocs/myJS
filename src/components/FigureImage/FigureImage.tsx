import style from './style.module.scss'

interface IFigureImage {
    src: string
    caption: string
}

const FigureImage = ({ src, caption }: IFigureImage) => {
    return (
        <figure className={style.image}>
            <img className={style.image__src} src={src} alt={caption} />
            <figcaption className={style.image__caption}>{caption}</figcaption>
        </figure>
    )
}

export default FigureImage
