import MainLogo from '@site/static/img/mainLogo.svg'
import style from './style.module.scss'

const Home = () => {
    return (
        <section className={style.home}>
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
