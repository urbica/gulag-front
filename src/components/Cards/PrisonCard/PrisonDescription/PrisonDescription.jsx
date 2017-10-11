/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import parseMarkup from '../../../../utils/parseMarkup';

// ico
// import closeIcon from '../icons/btn-close.svg';

import Description from './Description';
import Gallery from './Gallery/Gallery';

// styled
import Container from './Container';
// import { CardButton } from '../StyledButtons';

const imgURLRegEx = /(?:!\[.*?]\()+(.+?)(?:\))+/g;

const PrisonDescription = ({ markup }) => (
  <Container>
    {
      parseMarkup(markup)
        .map((elem, i) => {
          switch (elem.type) {
            case 'description': {
              return <Description key={i} md={elem.payload} isIncut={false} />;
            }
            case 'incut': {
              return <Description key={i} md={elem.payload} isIncut />;
            }
            case 'gallery': {
              const photos = [];
              let arr;

              // eslint-disable-next-line no-cond-assign
              while ((arr = imgURLRegEx.exec(elem.payload)) !== null) {
                // adding current match to last arr in acc
                photos.push(arr[1]);
              }
              return (
                <Gallery
                  key={i}
                  photos={photos}
                />
              );
            }
            default:
              return null;
          }
        })}
  </Container>
);

PrisonDescription.propTypes = {
  markup: PropTypes.string.isRequired
};

export default PrisonDescription;
