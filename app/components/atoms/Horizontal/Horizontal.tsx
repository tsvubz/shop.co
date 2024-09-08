import styles from './Horizontal.module.scss'

interface Horizon {
    widthDesktop: string;
    widthTablet: string;
    widthMobile: string;
    color?: string;
}

export const Horizontal = ({ widthDesktop, widthTablet, widthMobile}: Horizon) => {

    const hrStyle = `
            ${styles.hr}
            ${styles[widthDesktop]}
            ${styles[widthTablet]}
            ${styles[widthMobile]}
        `;

  return (
    <hr 
        className={`${hrStyle}`}
    />
  )
}
