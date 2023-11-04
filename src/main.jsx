import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home/Home';
import AuthProvider from './Components/Provider/AuthProvider';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import MyBooking from './Components/Pages/Bookings/MyBooking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Rooms from './Components/Pages/Rooms/Rooms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/booking',
        element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
      },
      {
        path:'/rooms',
        element:<Rooms></Rooms>
      }
    ]
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'login',
    element:<Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
