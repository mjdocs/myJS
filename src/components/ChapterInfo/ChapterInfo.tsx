import style from './style.module.scss'

interface IChapterInfo {
    type: 'formal' | 'informal'
    complexity: 'easy' | 'normal' | 'hard'
    time: string
}

const ChapterInfo = ({ type, complexity, time }: IChapterInfo) => {
    return (
        <header className={style.header}>
            <div className={style.list}>
                <img
                    className={style.list__item}
                    loading='lazy'
                    src={require(`@site/static/img/${type}.svg`).default}
                />
                <img
                    className={style.list__item}
                    loading='lazy'
                    src={require(`@site/static/img/${complexity}.svg`).default}
                />
                <span className={style.list__time}>{time + ' min'}</span>
            </div>
        </header>
    )
}

export default ChapterInfo