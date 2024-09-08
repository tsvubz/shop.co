import { ReactNode } from 'react';
import styles from './Container.module.scss'

interface ContainerProps {
    width?: string;
    height?: string;
    paddingDesktop: string;
    paddingTablet: string;
    paddingMobile: string;
    className?: string;
    children: ReactNode;
}


const Container = ({
    paddingDesktop,
    paddingTablet,
    paddingMobile,
    className,
    children,
}: ContainerProps) => {
    
    const containerStyle = `${styles.container} 
            ${styles[paddingDesktop]} 
            ${styles[paddingTablet]}
            ${styles[paddingMobile]}`;

    return (
        <div className={`${containerStyle} ${className}`}>
            {children}
        </div>
    );
};

export default Container;
