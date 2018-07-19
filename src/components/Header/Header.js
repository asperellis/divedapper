import React from 'react';
import Headroom from 'react-headroom';
import styles from './Header.css';

const Header = () => {
  return (
    <Headroom>
      <header className={styles.header}>
        <div className={'dd-column'}>
          <a href={'#mainContent'} className={'skipToContent'}>
            {'Skip To Content'}
          </a>
          <h3>This is the heada</h3>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
