import { createBrowserRouter } from 'react-router-dom';

import { PageTemplate } from '@/components/PageTemplate';
import { PageTemplateNoFooter } from '@/components/PageTemplateNoFooter';
import { BookingPage } from '@/pages/Booking';
import { HomePage } from '@/pages/Home';
import { ProfilePage } from '@/pages/Profile';

import { routes } from './config';

const { home, bookings, profile, baseURL } = routes;

export const router = createBrowserRouter([
  {
    path: `${baseURL}${home}`,
    element: <PageTemplateNoFooter />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
  {
    path: baseURL,
    element: <PageTemplate />,
    children: [
      {
        path: bookings,
        element: <BookingPage />,
      },
      {
        path: profile,
        element: <ProfilePage />,
      },
    ],
  },
]);
