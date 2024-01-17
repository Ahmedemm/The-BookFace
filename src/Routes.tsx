import { createBrowserRouter } from "react-router-dom";

import LoginPage from "./pages/Login.tsx";
import RegisterPage from "./pages/Register.tsx";
import FeedPage from "./pages/Feed.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import Error404 from "./pages/Error404.tsx";
import NotFound from "./pages/NotFound.tsx";

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
    id: "profile",
    path: "/userProfile",
    Component: UserProfile,
  },
  {
    id: "register",
    path: "/register",
    Component: RegisterPage,
  },
  {
    id: "error",
    path: "/error",
    Component: Error404,
  },
  {
    id: "notFound",
    path: "/notFound",
    Component: NotFound,
  },
]);
