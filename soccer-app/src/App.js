import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/homepage/HomePage";
import LeagueStats from "./pages/leagueStats/LeagueStats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/league-stats", element: <LeagueStats /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
