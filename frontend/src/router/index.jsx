import { createBrowserRouter } from 'react-router';

import MainLayout from '../layouts/MainLayout.jsx';

import HomePage from '../pages/HomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    //   {
    //     path: '/events',
    //     element: <EventsPage />,
    //   },
    //   {
    //     path: '/events/:id',
    //     element: <EventDetailsPage />,
    //   },
    //   {
    //     path: '/login',
    //     element: <LoginPage />,
    //   },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;