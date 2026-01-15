import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      //   { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

export default router;
