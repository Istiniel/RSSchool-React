import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderTestApp } from '../../helpers/renderTestApp';

describe('Cards', () => {
  it('shows typed text', () => {
    renderTestApp(<></>);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'fukuoka' } });

    expect(screen.getByDisplayValue('fukuoka')).toBeInTheDocument();
  });

  it('saves value in the store anime slice', () => {
    const { store, unmount } = renderTestApp(<></>);
    const form = screen.getByRole<HTMLFormElement>('searchBarForm');
    const input = screen.getByPlaceholderText('Enter anime title...');
    fireEvent.change(input, { target: { value: 'after change' } });
    fireEvent.submit(form);

    unmount();

    expect(store.getState().anime.searchQuery).toBe((input as HTMLInputElement).value);
  });
});
