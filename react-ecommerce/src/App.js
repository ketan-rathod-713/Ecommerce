import React from 'react';
import logo from './logo.svg';
import Counter from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Navbar from './features/navbar/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './features/auth/components/Login';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
    
     {/* <Home></Home> */}
     {/* <LoginPage/> */}
     {/* <SignupPage></SignupPage> */}

     <RouterProvider router={router} />
    </div>
  );
}

export default App;
