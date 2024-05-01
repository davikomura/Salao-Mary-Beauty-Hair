import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Page from './Pages/Page.jsx';
import HairCut from './Pages/Hair Cut/HairCut.jsx';
import Nails from './Pages/Nails/Nails.jsx';
import HairColor from './Pages/Hair Color/HairColor.jsx';
import Sobrancelha from './Pages/Sobrancelha/Sobrancelha.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Page />,
      },
      {
        path: "/HairCut",
        element: <HairCut />,
      },
      {
        path: "/Nails",
        element: <Nails />,
      },
      {
        path: "/HairColor",
        element: <HairColor />,
      },
      {
        path: "/Sobrancelha",
        element: <Sobrancelha />,
      },
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
