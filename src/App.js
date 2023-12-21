import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import Movie from "./Pages/Movie/Movie";

import Header from "./components/Header/Header";

import "./App.css";
import Search from "./Pages/Search/Search";
import NotFound404 from "./components/NotFound404/NotFound404";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Main />
            </>
          }
        />
        <Route
          path="/movie/:idMovie"
          element={
            <>
              <Header /> <Movie />
            </>
          }
        />
        <Route
          path="/search/"
          element={
            <>
              <Header />
              <Search />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <NotFound404 />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
