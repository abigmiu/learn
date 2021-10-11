import React from "react";
// import { Provider } from "react-redux";
// import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

export default function App() {
  return (
    <>
      <HashRouter>
        <AppHeader></AppHeader>
        <AppFooter></AppFooter>
      </HashRouter>
    </>
  );
}
