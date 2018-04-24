import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './Container';
import Button from './Button';

const Popup = ({ features, onClick, lang }) => (
  <Container>
    {features.map(f => (
      <Button
        key={f.properties.campId}
        onClick={onClick.bind(
          null,
          f.geometry.coordinates,
          f.properties.campId
        )}
      >
        {f.properties[`${lang}Name`]}
      </Button>
    ))}
  </Container>
);

Popup.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
};

export default Popup;
