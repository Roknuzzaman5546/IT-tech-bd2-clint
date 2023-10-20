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
import Updatecrads from './Components/Pages/Updatecrads';
import Register from './Components/Pages/Register';
import Authprovider from './Components/Authprovider/Authprovider';
import Privetrout from './Privetrout/Privetrout';
import Erorrepage from './Components/Pages/Erorrepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Erorrepage></Erorrepage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/cetagory.json')
      },
      {
        path: "/addproducts",
        element: <Privetrout><Addprudcts></Addprudcts></Privetrout>
      },
      {
        path: "/mycard",
        element: <Privetrout><Mycard></Mycard></Privetrout>,
        loader: () => fetch('https://assingment10-project-server-h5qum2jl3-rokonuzzamans-projects.vercel.app/card')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/brandproducts/:id",
        element: <Privetrout><Brandproducts></Brandproducts></Privetrout>,
        loader: () => fetch('https://assingment10-project-server-h5qum2jl3-rokonuzzamans-projects.vercel.app/product')
      },
      {
        path: "/carddetails/:id",
        element: <Carddetails></Carddetails>,
        loader: () => fetch('https://assingment10-project-server-h5qum2jl3-rokonuzzamans-projects.vercel.app/product')
      },
      {
        path: "/updatproducts/:id",
        element: <Updatecrads></Updatecrads>,
        loader: ({ params }) => fetch(`https://assingment10-project-server-h5qum2jl3-rokonuzzamans-projects.vercel.app/product/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
