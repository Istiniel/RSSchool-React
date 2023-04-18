import { rest } from 'msw';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { setupServer } from 'msw/node';
import { mockAnimes } from './src/mocks/mockAnimes';
import { mockAnime } from './src/mocks/mockAnime';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const server = setupServer(
  rest.get('https://api.jikan.moe/v4/anime', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockAnimes));
  }),
  rest.get('https://api.jikan.moe/v4/anime/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockAnime));
  }),
  rest.get('*', (req, res, ctx) => {
    console.log(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();

  // This is the solution to clear RTK Query cache after each test
  // store.dispatch(myApi.util.resetApiState());
});
afterAll(() => {
  server.close();
});

export { server, rest };
