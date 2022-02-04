import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={["/about", "/info"]} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
