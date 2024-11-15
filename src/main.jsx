import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AboutPage from './pages/aboutPage/AboutPage.jsx';
import Projects from './pages/projects/Projects.jsx';
import ContactUs from './pages/contactUs/ContactUs.jsx';
import {NextUIProvider} from "@nextui-org/react";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: "/about",
    element: < AboutPage/>,
  },
  {
    path: "/projects",
    element: < Projects/>,
  },
  {
    path: "/contact",
    element: < ContactUs/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider >
    <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
