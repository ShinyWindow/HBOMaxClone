import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentPage from "./ContentPage";
import HomePage from "./HomePage";
import NewContentPage from "./NewContentPage";
import SignInPage from "./SignInPage";

export default function LaunchPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/content" element={<NewContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
