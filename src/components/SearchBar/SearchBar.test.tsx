import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('Cards', () => {
  it('shows typed text', () => {
    render(<SearchBar setAnimeTitle={() => null} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'fukuoka' } });

    expect(screen.getByDisplayValue('fukuoka')).toBeInTheDocument();
  });

  it('saves value in the localstorage', () => {
    const { unmount } = render(<SearchBar setAnimeTitle={() => null} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'after change' } });

    unmount();

    expect(localStorage.getItem('searchKey')).toBe((input as HTMLInputElement).value);
  });
});
