import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import TokenDetails from "./pages/TokenDetails/TokenDetails";
import WalletDetails from "./pages/WalletDetails/WalletDetails";
import store from "./store/redux-saga";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/wallet-details/:addressHash"
              element={
                <Layout>
                  <WalletDetails />
                </Layout>
              }
            />
            <Route
              path="/token-details/:addressHash"
              element={
                <Layout>
                  <TokenDetails />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
