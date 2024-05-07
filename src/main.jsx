import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/Login.jsx",
    element: <Login/>
  },
  {
    path: "/Signup.jsx",
    element: <Signup/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
