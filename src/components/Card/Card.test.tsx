import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card title={''} description={''} thumb={''} id={0} date={''} contacts="telegram" />);

    expect(screen.getByAltText(/tg__icon/i)).toHaveAttribute('src');
  });
});
