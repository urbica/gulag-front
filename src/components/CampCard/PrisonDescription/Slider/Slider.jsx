import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styled
import {
  Container,
  Main,
  Gallery,
  Img,
  Left,
  Right,
  Close,
  Wrapper
} from './Slider.styled';

class Component extends PureComponent {
  render() {
    const {
      list,
      photo,
      handleToggleVisible,
      handleClickActive,
      handleClick,
      active
    } = this.props;

    return (
      <Container isOpened={photo.isOpened}>
        <Wrapper onClick={handleToggleVisible} />
        <Main isOpened={photo.isOpened}>
          <img src={list.getIn([active, 'src'])} alt='' />
          <article>
            <span>{list.getIn([active, 'description-ru'])}</span>
          </article>
        </Main>
        <Gallery>
          <div>
            {list.map((item, i) => (
              <Img
                onClick={handleClickActive.bind(null, i)}
                isActive={i === active}
                src={item.src}
                alt='Photo'
                key={item.count}
              />
            ))}
          </div>
        </Gallery>
        <Left onClick={handleClick.bind(null, true)} />
        <Right onClick={handleClick.bind(null, false)} />
        <Close onClick={handleToggleVisible} />
      </Container>
    );
  }
}

Component.propTypes = {
  photo: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  handleToggleVisible: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  handleClickActive: PropTypes.func.isRequired
};

export default Component;
