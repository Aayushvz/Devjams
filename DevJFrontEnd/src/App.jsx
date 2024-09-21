import "./App.css";
import ListingCard from "../components/ListingCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    element: Layout,
    children: [
      {
        path: "/Sale",
        element: <ListingCard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
