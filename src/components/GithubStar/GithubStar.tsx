import GitHubButton from 'react-github-btn'
import style from './style.module.scss'

const GithubStar = () => {
    return (
        <div className={style['github-star']}>
            <GitHubButton
                href='https://github.com/mjdocs/myJS'
                data-color-scheme='no-preference: light; light: light; dark: dark;'
                data-icon='octicon-star'
                data-size='large'
                aria-label='Star buttons/github-buttons on GitHub'
            >
                Star
            </GitHubButton>
        </div>
    )
}

export default GithubStar
