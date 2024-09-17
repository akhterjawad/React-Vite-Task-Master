import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes component={<Layout />} />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
