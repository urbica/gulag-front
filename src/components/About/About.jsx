/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { t } from '../../intl/helper';

// ico
import urbica from './urbica.svg';
import museum from './museum.svg';
import museumEn from './museum-en.svg';

import FullScreenCard from '../FullScreenCard/FullScreenCard';

// styled
import Title from './Title';
import Description from './Description';
import Link from './Link';
import Footer from './Footer';

import content from '../../config/aboutProject';

const img = {
  ru: museum,
  en: museumEn,
  de: museumEn
};

const About = ({ locale, pushToRoot }) => (
  <FullScreenCard onClick={pushToRoot}>
    <Title>{t('aboutCard.heading')}</Title>
    <Description>
      {content[locale].map((p, i) => <p key={i}>{p}</p>)}
      <Link href='mailto:mail@gulagmap.ru'>mail@gulagmap.ru</Link>
    </Description>
    <Footer>
      <a href='http://gmig.ru/' target='_blank' rel='noreferrer noopener'>
        <img src={img.ru} alt='' />
      </a>
      <a href='http://urbica.co/' target='_blank' rel='noreferrer noopener'>
        <img src={urbica} alt='URBICA' />
      </a>
    </Footer>
  </FullScreenCard>
);

About.propTypes = {
  locale: PropTypes.string.isRequired,
  pushToRoot: PropTypes.func.isRequired
};

export default About;
