import React from 'react';
import styles from './Hero.css';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Hero = ({ title = 'Hero Text', subtitle = 'Subtitle' }) => {
  return (
    <figure className={styles.hero}>
      <Reveal effect={styles.fadeInZoomIn} when={false}>
        <div
          style={{
            backgroundImage:
              "url('https://www.react-reveal.com/assets/striped-cat-small.jpg')"
          }}
          className={styles.heroImg}
          alt={'Divedapper HQ'}
        />
      </Reveal>
      <Fade top>
        <div className={'dd-column'}>
          <h1>{title}</h1>
          <h2 className={styles.heroSubtitle}>{subtitle}</h2>
        </div>
      </Fade>
      <figcaption className={styles.heroCaption}>Divedapper HQ</figcaption>
    </figure>
  );
};

export default Hero;
