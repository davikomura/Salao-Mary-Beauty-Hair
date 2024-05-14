import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Page from './Pages/Page.jsx';
import { Agenda } from './Pages/Agendamento/Agenda.jsx';

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
        path: "/Agendamento",
        element: <Agenda />,
      },
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
