import "./App.css";
import ListingCard from "../components/ListingCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
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
