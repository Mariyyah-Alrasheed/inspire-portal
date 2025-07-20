import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
// import Home from '../pages/Home';
// import About from '../pages/About';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/about"
          element={
            <>
              <h1>bay</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
