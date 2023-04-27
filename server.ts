import fs from 'node:fs/promises';
import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Constants
const port = process.env.PORT || 5173;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create http server
const app = express();

// Add Vite or respective production middlewares
const { createServer } = await import('vite');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});
app.use(vite.middlewares);

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;

    const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;

    let template = await fs.readFile(path.resolve(__dirname, './index.html'), 'utf-8');
    template = await vite.transformIndexHtml(url, `${template}`);

    const html = template.split(`<!--ssr-app-->`);

    const [{ pipe }, initialState] = await render(url, {
      onShellReady() {
        res.write(html[0]);
        pipe(res);
      },
      onShellError() {
        console.log(res);
      },
      onAllReady() {
        res.write(
          html[1] +
            `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(
              /</g,
              '\\u003c'
            )}</script>` +
            html[2]
        );
        res.end();
      },
      onError(err: Error) {
        console.log(err);
      },
    });
  } catch (e) {
    console.log(e);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
