import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import './index.css'
import Lessons from './Lessons.jsx'


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
  },
  {
    path: "/Lessons.jsx",
    element: <Lessons/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
