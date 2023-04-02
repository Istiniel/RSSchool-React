import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './index';
import cardsArray from '../../API/response.js';

describe('Cards', () => {
  it('all links should contain href', () => {
    render(<Cards cards={cardsArray} />);

    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveAttribute('href'));
  });

  it('all cards have thumb image', () => {
    render(<Cards cards={cardsArray} />);

    const cards = screen.getAllByRole('img');
    cards.forEach((card) => expect(card).toHaveAttribute('src'));
  });
});
