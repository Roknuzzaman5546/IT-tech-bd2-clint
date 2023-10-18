import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Pages/Roots';
import Home from './Components/Pages/Home';
import Addprudcts from './Components/Pages/Addprudcts';
import Mycard from './Components/Pages/Mycard';
import Login from './Components/Pages/Login';
import Brandproducts from './Components/Pages/Brandproducts';
import Carddetails from './Components/Pages/Carddetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/cetagory.json')
      },
      {
        path:"/addproducts",
        element: <Addprudcts></Addprudcts>
      },
      {
        path: "/mycard",
        element: <Mycard></Mycard>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/brandproducts/:id",
        element: <Brandproducts></Brandproducts>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/carddetails/:id",
        element: <Carddetails></Carddetails>,
        loader: () => fetch('http://localhost:5000/product')
      } 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
