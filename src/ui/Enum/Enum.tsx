import { IChildren } from '@site/src/types/interfaces'
import style from './style.module.scss'

interface IProps extends IChildren {}

const Enum = ({ children }: IProps) => {
    return <span className={style.enum}>{children}</span>
}

export default Enum
