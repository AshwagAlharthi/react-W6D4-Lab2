import React from 'react'
import { createBrowserRouter } from "react-router-dom";
  import "../index.css";
import App from '../App';
import About from '../About';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about/:id",
      element: <About />,
    },
  ]);

export default router