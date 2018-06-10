import React from 'react';
import PropTypes from 'prop-types';

// icons
import play from './btn-play.svg';
import pause from './btn-pause.svg';

// styled
import Button from './Button';

const PlayButton = ({ onClick, isDemoPlayed }) => (
  <Button onClick={onClick} isPlay={isDemoPlayed}>
    {/* img styled in Button */}
    <img src={!isDemoPlayed ? play : pause} alt='play-icon' />
  </Button>
);

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDemoPlayed: PropTypes.bool.isRequired
};

export default PlayButton;
