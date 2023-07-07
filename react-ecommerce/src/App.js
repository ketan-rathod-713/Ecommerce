import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserId } from './features/cart/cartAPI';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectUser } from './features/auth/authSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrders from './features/user/components/UserOrders';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfile from './features/user/components/UserProfile';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUser } from './features/user/userAPI';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import LogoutPage from './pages/LogoutPage';
import ForgotPassword from './features/auth/components/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected> <Home></Home></Protected>
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
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  {
    path: "/order-success/:id",
    element: <Protected><OrderSuccessPage></OrderSuccessPage></Protected>,
  },
  {
    path: "/orders",
    element:<Protected> <UserOrdersPage></UserOrdersPage></Protected>,
  },
  {
    path: "/profile",
    element:<Protected> <UserProfilePage></UserProfilePage></Protected>,
  },
  {
    path: "/logout",
    element:<LogoutPage></LogoutPage>,
  },
  {
    path: "/forgot-password",
    element:<ForgotPassword></ForgotPassword>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user?.id])

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
