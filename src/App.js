import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/TOP";
import Hiroaka from "./page/hiroaka";
import Koori from "./page/koori";
import Yozakura from "./page/yozakura";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hiroaka" element={<Hiroaka />} />
          <Route path="/koori" element={<Koori />} />
          <Route path="/yozakura" element={<Yozakura />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
