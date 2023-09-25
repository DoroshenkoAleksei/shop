import "./App.css";
import React from "react";
import Main from "./components/Main";
import { Route, Routes } from "react-router";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history"
import { useLocation, useNavigate } from "react-router-dom"
import AboutPage from "./components/AboutPage";

export const history = createBrowserHistory();

export default function App() {
  return (
    <HistoryRouter history={history}>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="about" element={<AboutPage />} />
            {/* <Route path=":shortcut" element={<Home />} />
            <Route path="mentors" element={<Mentors />} /> */}
          </Route>
        </Routes>        
    </HistoryRouter>
  );
}
