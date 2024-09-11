// Hero.tsx

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
            <div>
                <h1 className={styles.heroTitle}>
                    FIND CLOTHES<br /> THAT MATCHES<br /> YOUR STYLE
                </h1>
            </div>
            <div className={styles.heroTextContainer}>
                <p className={styles.heroText}>
                    Browse through our diverse range of meticulously crafted garments,<br />
                    designed to bring out your individuality and cater to your sense of style.
                </p>
            </div>
            <div>
                <button className={styles.heroBtn}>
                    Shop Now
                </button>
            </div>
            <div className={styles.heroStatsContainer}>
                <div className={styles.heroStats}>
                    <h3>200+</h3>
                    <p>International Brands</p>
                </div>
                <div className={styles.heroStats}>
                    <h3>2,000+</h3>
                    <p>High-Quality products</p>
                </div>
                <div className={styles.heroStats}>
                    <h3>30,000+</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;
