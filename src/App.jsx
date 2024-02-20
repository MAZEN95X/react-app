import { Component } from "react";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/Notfound/Notfound";

export default class App extends Component {
  state = {};

  render() {
    const router = createBrowserRouter([
      {
        path: "",
        element: <Layout />,
        children: [
          { path: "", element: <Navigate to={"home"} /> },
          { path: "home", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "portfolio", element: <Portfolio /> },
          { path: "contact", element: <Contact /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ]);
    return (
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    );
  }
}
