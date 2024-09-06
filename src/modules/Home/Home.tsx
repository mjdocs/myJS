import c from 'classnames'
import { useEffect, useRef } from 'react'
import MainLogo from '@site/static/img/mainLogo.svg'
import style from './style.module.scss'

const Home = () => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.classList.toggle(style.home_invisible)
        }
    }, [])

    return (
        <section ref={ref} className={c(style.home, style.home_invisible)}>
            <div className={style['logo-wrapper']}>
                <MainLogo />
            </div>
            <p className={style.home__title}>
                Первое приближение к общему пониманию ECMAScript Language Specification
            </p>
        </section>
    )
}

export default Home
