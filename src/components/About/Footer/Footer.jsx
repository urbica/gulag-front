import React from 'react';
import PropTypes from 'prop-types';

// links
import { links } from '../../../config/aboutProject';

// styled
import Container from './styled/Container';
import Link from './styled/Link';

const Footer = ({ locale }) => (
  <Container>
    {links.map(link => (
      <Link
        key={link.id}
        href={link.href}
        target='_blank'
        rel='noreferrer noopener'
      >
        {/* img styled at Link component */}
        <img src={link.src[locale]} alt={link.alt} />
      </Link>
    ))}
  </Container>
);

Footer.propTypes = {
  locale: PropTypes.oneOf(['ru', 'en', 'de']).isRequired
};

export default Footer;
