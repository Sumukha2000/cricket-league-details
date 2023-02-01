import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Schedule from "./pages/Schedule";
import MatchResults from "./pages/MatchResults";
import Stats from "./pages/Stats";
import Teams from "./pages/Teams";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/matchresults",
    element: <MatchResults />,
  },
  {
    path: "/stats",
    element: <Stats />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
