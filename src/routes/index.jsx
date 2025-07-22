import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Ideas from "../pages/Ideas";
import About from "../pages/About";
import Services from "../pages/Services";
import Careers from "../pages/Careers";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Ideas /> },
      { path: "/ideas", element: <Ideas /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/careers", element: <Careers /> },
      { path: "/work", element: <Work /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
