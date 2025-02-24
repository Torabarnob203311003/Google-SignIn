import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ErrorPage from './Components/Layouts/ErrorPage/ErrorPage';
import Root from './Components/Layouts/Root/Root';
import SignIn from './Components/Layouts/From/SignIn';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
   
     children : [

       {
         path: "/signup",
         element: <SignIn /> // This will render SignIn as a standalone page
       }
     ]
    // No need to add SignIn here
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
