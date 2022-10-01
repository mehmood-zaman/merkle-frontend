import Login from "Pages/Auth/Login";
import PageNotFound from "Pages/NotFound/index";
import MarketSearch from "Pages/SearchMovies";
import React from "react";
import Layout from "Components/Layout/Main/index";
import Theme from "Styles/theme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  const layoutWrapper = (component) => (
    <PrivateRoute>
      <Layout>{component}</Layout>
    </PrivateRoute>
  );
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginRedirect>
                <Login />
              </LoginRedirect>
            }
          />

          <Route path="/" element={layoutWrapper(<MarketSearch />)} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const LoginRedirect = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default App;
