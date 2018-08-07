import React from 'react';
import styles from './Footer.css';
import DivedapperLogo from './../../images/divedapper-logo-horizontal.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="dd-column-wide">
        <nav className={styles.footerNav}>
          <a href="/about">ABOUT</a>
          <a href="/interviews">INTERVIEWS</a>
          <a href="mailto:editor@divedapper.com">CONTACT</a>
        </nav>
        <div className={styles.footerLegal}>
          <div>
            <DivedapperLogo width={175} fill={'#fff'} className={'logo'} />
          </div>
          <div>&copy; 2015 divedapper All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
