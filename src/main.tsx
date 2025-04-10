import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import UserContextProvider from "./contexts/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
);
