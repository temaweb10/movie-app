import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import Movie from "./Pages/Movie/Movie";

import Header from "./components/Header/Header";

import "./App.css";
import Search from "./Pages/Search/Search";
import NotFound404 from "./components/NotFound404/NotFound404";
import PageLayout from "./components/PageLayout/PageLayout";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Main />
            </PageLayout>
          }
        />
        <Route
          path="/movie/:idMovie"
          element={
            <PageLayout>
              <Movie />
            </PageLayout>
          }
        />
        <Route
          path="/search/"
          element={
            <PageLayout>
              <Search />
            </PageLayout>
          }
        />
        <Route
          path="*"
          element={
            <PageLayout>
              <NotFound404 />
            </PageLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
