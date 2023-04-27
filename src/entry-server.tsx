import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import setupStore from './redux/store';
import { animeAPI } from './redux/API/animeAPI';

export async function render(
  url: string | Partial<Location>,
  context: RenderToPipeableStreamOptions
) {
  const store = setupStore();
  store.dispatch(animeAPI.endpoints.fetchAnimesByName.initiate(''));
  await Promise.all(store.dispatch(animeAPI.util.getRunningQueriesThunk()));

  return [
    ReactDOMServer.renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>,
      context
    ),
    store.getState(),
  ] as const;
}
