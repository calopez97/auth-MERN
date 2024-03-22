import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import SignUp from './Routes/SignUp.tsx';
import Dashboard from './Routes/Dashboard.tsx'
import SignIn from './Routes/Login.tsx';
import ProtectedRoute from './Routes/ProtectedRoute.tsx';
import { AuthProvider } from './Auth/AuthProvider.tsx';


const router =  createBrowserRouter([
  {
    path:'/',
    element:<SignIn />
  },
  {
    path:'/signup',
    element:<SignUp />
  },
  {
    path:'/',
    element:<ProtectedRoute />,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
