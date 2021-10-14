import React from "react";
import { Redirect } from "react-router-dom";

const Discover = React.lazy(() => import("@/pages/discover"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover"></Redirect>,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend"></Redirect>,
      },
      {
        path: "/discover/recommend",
        component: React.lazy(() =>
          import("@/pages/discover/c-pages/recommend")
        ),
      },
    ],
  },
];

export default routes;
