import "./App.css";
import React from "react";
import Main from "./components/Main";
import { Route, Routes } from "react-router";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history"
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import Delivery from "./components/Delivery";

export const history = createBrowserHistory();

export default function App() {
  return (
    <>
      <HistoryRouter history={history}>
        <Header />  
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="about" element={<AboutPage />} />
            <Route path=":Delivery" element={<Delivery />}  />
            {/* // <Route path="mentors" element={<Mentors />} /> */} */}
          </Route>
        </Routes>
      </HistoryRouter>
    </>
  );
}
