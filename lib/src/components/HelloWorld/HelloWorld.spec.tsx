import * as React from 'react';
import { shallow, mount } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('renders', () => {
    const component = shallow(<HelloWorld />);
    expect(component).toMatchSnapshot();
  });
  it('renders fo real', () => {
    const component = shallow(<HelloWorld />);
    expect(component).toMatchSnapshot();
  });
});
