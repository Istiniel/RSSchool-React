import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './index';

describe('Cards', () => {
  it('all links should contain href', () => {
    render(<Cards />);

    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveAttribute('href'));
  });

  it('all cards have thumb image', () => {
    render(<Cards />);

    const cards = screen.getAllByRole('img');
    cards.forEach((card) => expect(card).toHaveAttribute('src'));
  });
});
