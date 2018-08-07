import React from 'react';
import styles from './Hero.css';
import DivedapperLogo from './../../images/divedapper-logo.svg';

const Hero = ({
  title = 'Hero Text',
  subtitle = 'Subtitle',
  caption = '',
  interviewer = '',
  image = ''
}) => {
  return (
    <figure className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={image} alt={`${title} Headshot`} />
      </div>
      <div className={`dd-column ${styles.heroText}`}>
        <DivedapperLogo
          width={125}
          height={125}
          fill={'#fff'}
          viewBox={'0 0 393.737 337.469'}
          className={'logo'}
        />
        <h1>{title}</h1>
        <h2 className={styles.heroSubtitle}>{subtitle}</h2>
        <div>Interviewed By: {interviewer}</div>
      </div>
      {caption && (
        <figcaption className={styles.heroCaption}>{caption}</figcaption>
      )}
    </figure>
  );
};

export default Hero;
