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
import About from './About.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Signup",
    element: <Signup/>
  },
  {
    path: "/Lessons",
    element: <Lessons/>
  },
  {
    path: "/Blogs",
    element: <Blogs/>
  },
  {
    path: "/Blogcreate",
    element: <BlogCreate/>
  },
  {
    path: "/About",
    element: <About/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
