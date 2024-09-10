import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "singleProduct/:id",
        element: <SingleProduct />
      },
      {
        path: "*",
        element: <h1>Not found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)

