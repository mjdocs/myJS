import { IChildren, IClassName } from '@site/src/types/interfaces'

interface IProps extends IChildren, IClassName {}

const Paragraph = ({ children, className }: IProps) => {
    return <p className={className}>{children}</p>
}

export default Paragraph
