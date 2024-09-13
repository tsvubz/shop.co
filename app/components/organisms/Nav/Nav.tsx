import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import Flex from '@app/components/atoms/Flex/Flex';
import { AlignItems, FlexGap, JustifyContent } from '@app/utils/styles';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Flex alignItems={AlignItems.CENTER} justifyContent={JustifyContent.SPACE_BETWEEN}>
        <Link to="/" className={styles.title}>
          SHOP.CO
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
          <Flex alignItems={AlignItems.CENTER} justifyContent={JustifyContent.SPACE_EVENLY} gap={FlexGap.SMALL}>
            <Link to="/shop">Shop</Link>
            <Link to="/sale">On Sale</Link>
            <Link to="/new">New Arrivals</Link>
            <Link to="/cart">Cart</Link>
          </Flex>
        </nav>
      </Flex>
    </header>
  );
};

export default Nav;
