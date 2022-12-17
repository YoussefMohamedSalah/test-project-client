import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from 'src/layouts/DashboardLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const Landing = Loader(lazy(() => import('src/content/Landing')));
const Login = Loader(lazy(() => import('src/content/auth_Pages/Login')));


// Dashboard

const Main = Loader(lazy(() => import('src/content/dashboards/Main')));
const Schedule = Loader(lazy(() => import('src/content/dashboards/Schedule')));
const Courses = Loader(lazy(() => import('src/content/dashboards/Courses')));
const Gradebook = Loader(lazy(() => import('src/content/dashboards/Gradebook')));
const Performance = Loader(lazy(() => import('src/content/dashboards/Performance')));
const Announcement = Loader(lazy(() => import('src/content/dashboards/Announcement')))

const Searched = Loader(lazy(() => import('src/content/dashboards/Searched')))



const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);

const routes = [
  // open Routes 
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '/',
        element: <Landing />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  // protected Routes
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="main" replace />
      },
      {
        path: 'main',
        element: <Main />
      },
      {
        path: 'schedule',
        element: <Schedule />
      },
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'gradebook',
        element: <Gradebook />
      },
      {
        path: 'performance',
        element: <Performance />
      },
      {
        path: 'announcement',
        element: <Announcement />
      },
      {
        path: 'searched/:search',
        element: <Searched />
      },
    ]
  },
];

export default routes;
