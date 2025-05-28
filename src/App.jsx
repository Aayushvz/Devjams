import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
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
import ErrorBoundary from "./components/ErrorBoundary";

// Determine if we're in development or production
const isDevelopment = import.meta.env.DEV;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/login",
    element: (
      <LogLayout>
        <Login />
      </LogLayout>
    ),
    errorElement: <ErrorBoundary />
  },
  { 
    path: "/kyc", 
    element: <Kyc />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/authed/rentals",
    element: (
      <Layout>
        <Rentals />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ":search",
        element: (
          <Layout>
            <Rentals />
          </Layout>
        ),
        errorElement: <ErrorBoundary />
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
    errorElement: <ErrorBoundary />
  },
  {
    path: "/authed/Dashboard",
    element: (
      <Layout>
        <AccountManagement />
      </Layout>
    ),
    errorElement: <ErrorBoundary />
  },
  {
    path: "/authed/product/:id",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
    errorElement: <ErrorBoundary />
  },
  {
    path: "/authed/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
    errorElement: <ErrorBoundary />
  },
  {
    path: "/authed/listing/createListing",
    element: (
      <Layout>
        <CreateListing />
      </Layout>
    ),
    errorElement: <ErrorBoundary />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
    errorElement: <ErrorBoundary />
  }
], {
  basename: isDevelopment ? undefined : '/Vrent'
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
