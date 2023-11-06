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
import RoomDetails from './Components/Pages/Rooms/RoomDetails';
import Bookings from './Components/Pages/Bookings/Bookings';
import UpdateBooking from './Components/Pages/Bookings/UpdateBooking';
import AboutUs from './Components/Pages/About/AboutUs';
import ContactUs from './Components/Pages/About/ContactUs';

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
      },
      {
        path:'/roomDetails/:id',
        element:<RoomDetails></RoomDetails>,
        loader:()=>fetch('http://localhost:5000/rooms')
      },
      {
        path:'/bookNow/:id',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/rooms')
        
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><UpdateBooking></UpdateBooking></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/bookings')
      },{
        path:'about',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
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
