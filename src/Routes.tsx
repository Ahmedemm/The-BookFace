import { createBrowserRouter } from "react-router-dom";

import LoginPage from "./Login.tsx";
import RegisterPage from "./Register.tsx";
import FeedPage from "./Feed.tsx";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: FeedPage,
  },
  {
    id: "login",
    path: "/login",
    Component: LoginPage,
  },
  {
    id: "register",
    path: "/register",
    Component: RegisterPage,
  },
]);
