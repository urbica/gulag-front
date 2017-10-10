/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,
jsx-a11y/no-static-element-interactions, react/no-danger, jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Parser, HtmlRenderer } from 'commonmark';

// styled
import FullScreenContainer from './FullScreenContainer';

const reader = new Parser();
const writer = new HtmlRenderer();

class Description extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null
    };
    this.onClick = this.onClick.bind(this);
    this.fullScreenOnClick = this.fullScreenOnClick.bind(this);
    this.keydown = this.keydown.bind(this);
  }

  onClick(e) {
    const element = e.target;

    if (element.tagName === 'IMG') {
      this.setState({ imgUrl: element.src });
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', this.keydown);
    }
  }

  fullScreenOnClick() {
    this.setState({ imgUrl: null });
    document.body.style.overflow = 'initial';
    document.removeEventListener('keydown', this.keydown);
  }

  keydown(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      this.setState({ imgUrl: null });
      document.body.style.overflow = 'initial';
      document.removeEventListener('keydown', this.keydown);
    }
  }

  render() {
    const parsed = reader.parse(this.props.md);
    const result = writer.render(parsed);
    const className = this.props.isIncut ? 'incut' : '';

    return (
      <div>
        <div
          className={className}
          onClick={this.onClick}
          dangerouslySetInnerHTML={{ __html: result }}
        />
        {
          this.state.imgUrl &&
          <FullScreenContainer onClick={this.fullScreenOnClick}>
            <img src={this.state.imgUrl} alt='' onClick={e => e.stopPropagation()} />
            {/* <CardButton onClick={this.toggleFullScreen}> */}
            {/* <img src={closeIcon} alt='' /> */}
            {/* </CardButton> */}
          </FullScreenContainer>
        }
      </div>
    );
  }
}

Description.propTypes = {
  md: PropTypes.string.isRequired,
  isIncut: PropTypes.bool.isRequired
};

export default Description;
