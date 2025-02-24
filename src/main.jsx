import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ErrorPage from './Components/Layouts/ErrorPage/ErrorPage';
import Root from './Components/Layouts/Root/Root';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>, // This should wrap all pages, including SignIn
    errorElement: <ErrorPage/>,
    children: [

      
          ],

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
