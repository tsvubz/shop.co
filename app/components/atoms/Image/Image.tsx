
import styles from './Image.module.scss'

interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    className?: string;
}
const Image = ({ src, alt, width = '100%', height = '100%', className = '', }: ImageProps) => {
  
    return (
    <div className={`${styles.imageContainer} ${className}`}>
        <img src={src} alt={alt} style={{ width, height }} className={styles.image} />
    </div>
  )
}

export default Image