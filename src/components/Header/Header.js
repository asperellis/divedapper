import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(
      prevState => ({
        navOpen: !prevState.navOpen
      }),
      () => {
        document.documentElement.classList.toggle(styles.navOpen);
      }
    );
  }

  render() {
    const { navOpen } = this.state;
    return (
      <header className={styles.header}>
        <a href={'#mainContent'} className={'skipToContent'}>
          {'Skip To Content'}
        </a>
        <nav
          className={`${styles.headerNav} ${
            navOpen ? styles.headerNavOpen : ''
          }`}
        >
          <div className={styles.headerNavContent}>
            <ul>
              <li>About</li>
              <li>Interviews</li>
              <li>Carnival</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <button
          className={styles.headerNavBtn}
          aria-label="Toggle Site Navigation"
          onClick={this.toggleNav}
        />
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
