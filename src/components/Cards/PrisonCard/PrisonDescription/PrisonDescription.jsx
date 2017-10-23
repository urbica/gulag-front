/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import parseMarkup from '../../../../utils/parseMarkup';

// ico
// import closeIcon from '../icons/btn-close.svg';

import Description from './Description';
// import Gallery from './Gallery/Gallery';

// styled
import Container from './Container';
// import { CardButton } from '../StyledButtons';

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
            // case 'gallery': {
            //   const photos = [];
            //   elem.payload
            //     .split('![](')
            //     .forEach((e, index) => {
            //       if (index > 0) {
            //         const photoWithDesc = e.split(')\n');
            //         photos.push({
            //           src: photoWithDesc[0],
            //           desc: photoWithDesc[1]
            //         });
            //       }
            //     });
            //
            //   return (
            //     <Gallery
            //       key={i}
            //       photos={photos}
            //     />
            //   );
            // }
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
