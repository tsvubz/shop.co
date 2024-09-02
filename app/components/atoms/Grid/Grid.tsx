import { ReactNode } from 'react';
import styles from './Grid.module.scss';

interface GridProps {
    columnsDesktop?: string;
    columnsTablet?: string;
    columnsMobile?: string;
    className?: string;
    children: ReactNode;
}

const Grid = ({
        columnsDesktop = 'desktop-3',
        columnsTablet = 'tablet-2',
        columnsMobile = 'mobile-1',
        className = '',
        children,
    }: GridProps) => {

        const gridStyle = `${styles.grid} 
            ${styles[columnsDesktop]} 
            ${styles[columnsTablet]}
            ${styles[columnsMobile]}`;

    return (
        <div className={`${gridStyle} ${className}`}>
            {children}
        </div>
    );
};

export default Grid;