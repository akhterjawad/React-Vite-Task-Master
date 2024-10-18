import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ProtectedRoutes from "./Pages/ProtectedRoutes.jsx";
import './index.css'
import MainTodo from './Pages/MainTodo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ProtectedRoutes component={<MainTodo />} />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <h1>Not found!</h1>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
