import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import ErrorPage from './ErrorPage';
import { ThemeProvider } from './ThemeContext';
// import ProductDetails from './ProductDetails';
const ProductDetails = React.lazy(() => import("./ProductDetails"))

// We are defining the routes
const router = createBrowserRouter ([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path: '',
        element:<Home />
      },
      {
        path: 'register',
        element:<Register />
      },
      {
        path: 'login',
        element:<Login />
      },
      {
        path: 'products/:productId',
        element:<React.Suspense>
                <ProductDetails />
                </React.Suspense>
      }
      // wild card route
      // {
      //   path: '*',
      //   element:<ErrorPage />
      // }
    ],
    // errorElement:<ErrorPage />
  },
  // {
  //   path: '/home',
  //   element: <Home />
  // }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <App /> //no static rendering of componnt
  // <RouterProvider router ={router} />
  // </React.StrictMode>
  <ThemeProvider>
    <RouterProvider router ={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
