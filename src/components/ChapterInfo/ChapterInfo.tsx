import style from './style.module.scss'

interface IChapterInfo {
    type: 'formal' | 'informal'
    complexity: 'easy' | 'normal' | 'hard'
    time: string
}

const ChapterInfo = ({ type, complexity, time }: IChapterInfo) => {
    return (
        <article className={style['info-wrapper']}>
            <div className={style.list}>
                <img
                    className={style.list__item}
                    loading='lazy'
                    src={require(`@site/static/img/${type}.svg`).default}
                    alt='Chapter content Style'
                />
                <img
                    className={style.list__item}
                    loading='lazy'
                    src={require(`@site/static/img/${complexity}.svg`).default}
                    alt='Chapter Difficulty'
                />
                <span className={style.list__time}>{time + ' min'}</span>
            </div>
        </article>
    )
}

export default ChapterInfo
