import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import AboutPage from './routes/about';
import Products from './routes/products';
import Login from './routes/login';


//react router
const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />
},
{
  path:"/about",
  element: <AboutPage />,
},
{
  path:"/products",
  element: <Products />,
},
{
  path: "/login",
  element: <Login />,
},
])


 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
