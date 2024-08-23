import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
 
  createHashRouter, 
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout"
import App from "./App";
import SignUp from "./SignUp";
import Login from  "./Login"
import {ChakraProvider} from "@chakra-ui/react";
import Gallery from "./Gallery.tsx";
import About from "./AboutUs.tsx";
import Favorites from "./Favorites.tsx";
import Advice from "./Advice.tsx";
import Contacts from "./Contacts.tsx";
import Forgot from "./Forgot.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <App />,
    },{
      path: "/gallery",
      element: <Gallery />,
    },{
      path: "/aboutus",
      element: <About />,
    },{
      path: "/favorites",
      element: <Favorites />,
    },{
      path: "/advice",
      element: <Advice />,
    },{
      path: "/Contacts",
      element: <Contacts />, 
    },
    {
      path: "/forgot",
      element: <Forgot />, 
    }
  
  ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);


ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ChakraProvider>
       <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
