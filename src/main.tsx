import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./Routes.tsx";
// import FeedPage from "./Feed.tsx";
// import { createBrowserRouter } from "react-router-dom";

// createBrowserRouter (
//   [
  // { path:'/' , element: <FeedPage/>},
  // {path:'', element:</>}]
// )
// function App () {
//   return <RouterProvider router={router}/>
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  </React.StrictMode>
);
