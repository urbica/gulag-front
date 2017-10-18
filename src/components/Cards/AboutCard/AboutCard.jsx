import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { langSelector } from '../../App/selectors';
import { t } from '../../../intl/helper';

// ico
import urbica from './urbica.svg';
import museum from './museum.svg';
import museumEn from './museum-en.svg';
import cross from '../../../icons/btn-close.svg';

import CardButton from '../../Buttons/CardButton';

// styled
import Container from './Container';
import Header from './Header';
import Title from './Title';
import DescriptionContainer from './DescriptionContainer';
import Footer from './Footer';

import content from './content';

const img = {
  ru: museum,
  en: museumEn,
  de: museumEn
};

const AboutCard = props => (
  <Container>
    <Header>
      <Title>{t('aboutCard.heading')}</Title>
      <CardButton onClick={props.dispatch.bind(null, push('/'))}>
        <img src={cross} alt='cross' />
      </CardButton>
    </Header>
    <DescriptionContainer>
      {content[props.lang].map(p => <p>{p}</p>)}
    </DescriptionContainer>
    <Footer>
      <a href='http://gmig.ru/' target='_blank' rel='noreferrer noopener'>
        <img src={img[props.lang]} alt='' />
      </a>
      <a href='http://urbica.co/' target='_blank' rel='noreferrer noopener'>
        <img src={urbica} alt='URBICA' />
        <div style={{ marginTop: '9px' }}>{t('aboutCard.urbica')}</div>
      </a>
    </Footer>
  </Container>
);

AboutCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
};

export default connect(
  state => ({
    lang: langSelector(state)
  })
)(AboutCard);
