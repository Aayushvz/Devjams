import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Kyc from "./pages/Kyc";
import LogLayout from "./AppLayout/LogLayout";
import AccountManagement from "./pages/AccountManagement";
import Profile from "./pages/Profile";

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
    path: "/authed",
    element: <Layout />,
    children: [
      {
        path: "/authed/Dashboard",
        element: <AccountManagement />,
      },
      {
        path: "/authed/Profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
