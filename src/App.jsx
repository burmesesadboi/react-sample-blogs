import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import Dynamic from "./components/Dynamic";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Master Layout</h1>
              <Outlet />
            </>
          }
        >
          <Route index element={<h1>Home</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs">
            <Route path=":id" element={<Dynamic />} />
          </Route>

          <Route path="/contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
      <Button />
    </BrowserRouter>
  );
}

export default App;
