
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Layout from "./Components/Layout/Layout";
import Error from './Components/ErrorMessge/Error';

const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index:true, element: <Home /> },
      { path: 'startFramework', element: <Home /> },
      {path:'about' , element:<About/>},
      {path:'portfolio' , element:<Portfolio/>},
      { path: 'contact', element: <Contact /> },
    ]
  },
  {path:'*',element:<Error/>},
])
export default function App() {
  return <>
  <RouterProvider router={router}/>
  </>
}
