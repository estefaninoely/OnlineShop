import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./pages/Details";

import Payment from "./pages/Payment";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/details/:productId",
    element: <Details />,
  },
  {
    path: "/shopping",
    element: <Shop />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:blogTitle",
    element: <BlogPost />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
