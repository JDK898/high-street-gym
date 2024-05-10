import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import './index.css'
import Lessons from './Lessons.jsx'
import Blogs from './Blogs.jsx'
import BlogCreate from './Blogcreate.jsx'


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
  },
  {
    path: "/Blogs.jsx",
    element: <Blogs/>
  },
  {
    path: "/Blogcreate.jsx",
    element: <BlogCreate/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
