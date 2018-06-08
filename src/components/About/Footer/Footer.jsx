import React from 'react';

// icons
import urbica from '../../../config/logos/urbica.svg';
import museum from '../../../config/logos/museum.svg';
import museumEn from '../../../config/logos/museum-en.svg';
import pgrants from '../../../config/logos/pgrants.svg';
import fond from '../../../config/logos/fond.svg';

// styled
import Container from './styled/Container';
import Link from './styled/Link';

// localized images
const img = {
  ru: museum,
  en: museumEn,
  de: museumEn
};

/**
 *  TODO move links and icons to config
 */
const Footer = () => (
  <Container>
    <Link href='http://gmig.ru/' target='_blank' rel='noreferrer noopener'>
      <img src={img.ru} alt='gulag museum' />
    </Link>
    <Link href='https://urbica.co/' target='_blank' rel='noreferrer noopener'>
      <img src={urbica} alt='urbica' />
    </Link>
    <Link
      href='https://президентскиегранты.рф/'
      target='_blank'
      rel='noreferrer noopener'
    >
      <img src={pgrants} alt='president grants fund' />
    </Link>
    <Link
      href='http://memoryfund.ru/'
      target='_blank'
      rel='noreferrer noopener'
    >
      <img src={fond} alt='memory fund' />
    </Link>
  </Container>
);

export default Footer;
