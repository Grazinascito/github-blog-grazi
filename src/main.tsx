import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Post } from "./pages/Post/Post";
import { Root } from "./pages/Root/Root";
import { ResumeProvider } from "./context/ResumeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResumeProvider>
      <RouterProvider router={router} />
    </ResumeProvider>
  </React.StrictMode>
);
