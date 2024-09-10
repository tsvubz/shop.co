import { ReactNode } from 'react';

interface ScrollProps {
    height: string;
    overflow?: 'auto' | 'scroll' | 'hidden' | 'visible';
    children: ReactNode;
}

const Scroll = ({ height, overflow, children }: ScrollProps) => {
    const scrollStyle = {
        height,
        overflow,
    };

    return <div style={scrollStyle}>{children}</div>;
};

export default Scroll;
