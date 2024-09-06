import LinkedImage from '@site/src/ui/LinkedImage/LinkedImage'
import { HELP_PROJECTS } from '@site/src/utils/helpProjects'
import style from './style.module.scss'

const HelpProjects = () => {
    return (
        <article className={style['help-projects']}>
            {HELP_PROJECTS.map(el => (
                <LinkedImage
                    key={el.id}
                    className={style['help-projects__img-link']}
                    url={el.url}
                    src={el.src}
                    alt={el.alt}
                />
            ))}
        </article>
    )
}

export default HelpProjects
