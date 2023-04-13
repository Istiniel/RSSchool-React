import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderTestApp } from '../../helpers/renderTestApp';
import { server, rest } from '../../../testServer';

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe('MainPage', () => {
  it('should fetch cards information and render cards component with it', async () => {
    renderTestApp(<></>, { initialRoute: '/' });

    const searchBarForm = screen.getByRole('searchBarForm');
    const searchBarInput = screen.getByPlaceholderText<HTMLInputElement>('Enter anime title...');
    fireEvent.change(searchBarInput, { target: { value: 'crater' } });
    fireEvent.submit(searchBarForm);

    const fullAnimeTitle = await screen.findByText('Crater no...');
    expect(fullAnimeTitle).toBeInTheDocument();
  });

  it('should show error if data is not obtained', async () => {
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
