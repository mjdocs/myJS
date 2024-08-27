import style from './style.module.scss'

interface IAvatar {
    name: string
    desc1: string
    desc2: string
    src: string
}

const Avatar = ({ name, desc1, desc2, src }: IAvatar) => {
    return (
        <section className={style['avatar-wrapper']}>
            <div className='avatar'>
                <img className='avatar__photo avatar__photo--xl' src={src} />
                <div className='avatar__intro'>
                    <div className='avatar__name'>{name}</div>
                    <small className='avatar__subtitle'>{desc1}</small>
                    <small className='avatar__subtitle'>
                        <i>{desc2}</i>
                    </small>
                </div>
            </div>
        </section>
    )
}

export default Avatar
