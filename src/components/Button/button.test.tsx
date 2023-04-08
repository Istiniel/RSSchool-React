import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('it shows content', () => {
    render(<Button type={'submit'} content={'test-content'} />);

    const buttonInnerText = screen.getByText(/test-content/);
    expect(buttonInnerText).toBeInTheDocument();
  });
});
