import React from 'react';
import renderer from 'react-test-renderer';

import Aside from './Aside';

const fn = jest.fn();

test.skip('Aside renders correctly', () => {
  const component = renderer.create(
    <Aside
      isMenuOpen={false}
      pushToSearch={fn}
      closeMenu={fn}
      openCampFilters={fn}
      pushToChronology={fn}
      pushToAbout={fn}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.isMenuOpen = true;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
