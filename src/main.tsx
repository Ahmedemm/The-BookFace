import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Route, Routes } from "react-router";
import PrivateRoutes from "./PrivateRoutes";
import Feed from "./pages/Feed.tsx";
import Login from "./pages/Login.tsx";
import { BrowserRouter } from "react-router-dom";
import Error404 from "./pages/Error404.tsx";
import AuthProvider from "react-auth-kit";

import createStore from "react-auth-kit/createStore";
import Register from "./pages/Register.tsx";

interface UserAuth {
  authName: string;
  authType: string;
  cookieDomain: string;
  cookieSecure: string;
}

const store = createStore<UserAuth>({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Feed />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
      <Route path="register" element={<Register/>}/>
    </Routes>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
