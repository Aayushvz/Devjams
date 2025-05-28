import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Kyc from "./pages/Kyc";
import LogLayout from "./layouts/LogLayout";
import AccountManagement from "./pages/AccountManagement";
import Profile from "./pages/Profile";
import Rentals from "./pages/rentals";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CreateListing from "./pages/CreateListing";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: (
      <LogLayout>
        <Login />
      </LogLayout>
    ),
  },
  { path: "/kyc", element: <Kyc /> },
  {
    path: "/authed/rentals",
    element: (
      <Layout>
        <Rentals />
      </Layout>
    ),
    children: [
      {
        path: ":search",
        element: (
          <Layout>
            <Rentals />
          </Layout>
        ),
      },
    ],
  },
  {
    path: "/authed/Profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/authed/Dashboard",
    element: (
      <Layout>
        <AccountManagement />
      </Layout>
    ),
  },
  {
    path: "/authed/product/:id",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
  {
    path: "/authed/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/authed/listing/createListing",
    element: (
      <Layout>
        <CreateListing />
      </Layout>
    ),
  },
], {
  basename: '/Vrent'
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
