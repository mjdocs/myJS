import Logo from '@site/static/img/myJS.svg'
import LongLogo from '@site/static/img/longLogo.svg'
import style from './style.module.scss'

const AboutLogo = () => {
    return (
        <div className={style['logo-wrapper']}>
            <Logo />
            <span className={style['logo-wrapper__separator']}></span>
            <LongLogo />
        </div>
    )
}

export default AboutLogo
