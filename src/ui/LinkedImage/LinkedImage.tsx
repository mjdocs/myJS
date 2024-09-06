import { IClassName, ILinkedImage } from '../../types/interfaces'

interface IProps extends Omit<ILinkedImage, 'id'>, IClassName {}

const LinkedImage = ({ url, className, ...props }: IProps) => {
    return (
        <a className={className} href={url} target='_blank'>
            <img {...props} />
        </a>
    )
}

export default LinkedImage
