import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Kyc from "./pages/Kyc";
import LogLayout from "./AppLayout/LogLayout";
import AccountManagement from "./pages/AccountManagement";
import Profile from "./pages/Profile";
import Rentals from "./pages/rentals";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
