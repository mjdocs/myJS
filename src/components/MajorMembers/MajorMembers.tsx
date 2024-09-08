import LinkedImage from '@site/src/ui/LinkedImage/LinkedImage'
import { MAJOR_MEMBERS } from '@site/src/utils/majorMembers'
import style from './style.module.scss'

const MajorMembers = () => {
    return (
        <article className={style.members}>
            {MAJOR_MEMBERS.map(el => (
                <LinkedImage
                    key={el.id}
                    className={style['members__img-link']}
                    src={el.src}
                    url={el.url}
                    alt={el.alt}
                />
            ))}
        </article>
    )
}

export default MajorMembers
