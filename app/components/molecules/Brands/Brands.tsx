// Brands.tsx

import styles from './Brands.module.scss';
import versace from '../../../../public/brands/versace.png';
import zara from '../../../../public/brands/zara.png';
import gucci from '../../../../public/brands/gucci.png';
import prada from '../../../../public/brands/prada.png';
import calvin from '../../../../public/brands/calvinklein.png';


const Brands: React.FC = () => {
  return (
    <section className={styles.brandsSection}>
      <div className={styles.brandsContainer}>
        <img src={versace} alt="Versace" className={styles.brandImage} />
        <img src={zara} alt="Zara" className={styles.brandImage} />
        <img src={gucci} alt="Gucci" className={styles.brandImage} />
        <img src={prada} alt="Prada" className={styles.brandImage} />
        <img src={calvin} alt="Calvin Klein" className={styles.brandImage} />
      </div>
    </section>
  );
};

export default Brands;
