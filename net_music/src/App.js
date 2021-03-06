import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import AppPlayerBar from "@/pages/player/app-player-bar";

import routes from "@/router/index";
import store from "@/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader></AppHeader>
        <Suspense fallback={<div>加载中</div>}>{renderRoutes(routes)}</Suspense>
        <AppFooter></AppFooter>
        <AppPlayerBar></AppPlayerBar>
      </HashRouter>
    </Provider>
  );
}
