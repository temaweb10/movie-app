import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

function App() {
  return <div>g</div>
}

export default App;
