import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./assets/pages/About";
import Home from "./assets/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
