import { createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
]);

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<AppLayout/>}>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Route>
//   )
// )