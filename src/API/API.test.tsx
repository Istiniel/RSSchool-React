import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Card from './../components/Card/index';
import { server, rest } from '../../testServer';
import { renderTestApp } from '../helpers/renderTestApp';
import { renderTestWithStore } from '../helpers/renderTestWithStore';
import { mockAnime } from '../mocks/mockAnime';

describe('Fetch Anime', () => {
  it('makes a GET request and return anime with provided id', async () => {
    renderTestWithStore(<Card {...mockAnime.data} />);
    fireEvent.click(screen.getByTestId('container'));

    const fullAnimeTitle = await screen.findByText('Crater no Naru Ki');

    expect(fullAnimeTitle).toBeInTheDocument();
  });

  it('returns null when exception', async () => {
    renderTestApp(<></>, { initialRoute: '/' });

    server.use(
      rest.get('https://api.jikan.moe/v4/anime', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    const searchBarForm = screen.getByRole('searchBarForm');
    const searchBarInput = screen.getByPlaceholderText<HTMLInputElement>('Enter anime title...');
    fireEvent.change(searchBarInput, { target: { value: 'nonExistedAnimeInTheWholeUniverse' } });
    fireEvent.submit(searchBarForm);

    const fullAnimeTitle = await screen.findByText('No matches ...');
    expect(fullAnimeTitle).toBeInTheDocument();
  });
});
