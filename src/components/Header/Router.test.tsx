import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider, useNavigate } from 'react-router-dom';
import MainPage from '../../Pages/MainPage';
import Header from '.';

const ElementToRender: React.FC = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate('/')}>Navigate to Home</button>;
};

describe('Cards', () => {
  it('route change', async () => {
    const { router } = setupRouter();

    fireEvent.click(screen.getByRole('button', { name: 'Navigate to Home' }));

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/');
    });
  });
});

const setupRouter = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <Header />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: 'about',
            element: <ElementToRender />,
          },
        ],
      },
    ],
    {
      initialEntries: ['/about'],
      initialIndex: 0,
    }
  );

  render(<RouterProvider router={router} />);

  return { router };
};
