import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className={styles.Container}>{children}</div>;
};

export default Container
