import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import TokenDetails from "./pages/TokenDetails/TokenDetails";
import WalletDetails from "./pages/WalletDetails/WalletDetails";

function App() {
  return (
    <>
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
            path="/wallet-details"
            element={
              <Layout>
                <WalletDetails />
              </Layout>
            }
          />
          <Route
            path="/token-details"
            element={
              <Layout>
                <TokenDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
