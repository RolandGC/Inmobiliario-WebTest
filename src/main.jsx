import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Rent from './pages/Rent'
import Buy from './pages/Buy'
import Layout from './components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCog, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faCog, faSpinner);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          path: '/'
        },
        {
          element: <Contact />,
          path: '/contacto'
        },
        {
          element: <Rent />,
          path: '/alquilar'
        },
        {
          element: <Buy />,
          path: '/comprar'
        }
      ]
    },

  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
