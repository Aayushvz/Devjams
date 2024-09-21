import "./App.css";
import ListingCard from "../components/ListingCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Kyc from "./pages/Kyc";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  // {
  //   path: "/login",
  //   element: (
  //     <Layout>
  //       <Login />
  //     </Layout>
  //   ),
  // },
  { path: "/kyc", element: <Kyc /> },
  {
    element: <Layout />,
    children: [
      {
        path: "/Sale",
        element: <ListingCard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
