import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/index";
import Contact from './components/contact/Contact';
import Catalog from './components/catalog/Catalog';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exat path="/" element={<Home />} />
          <Route exat path="/catalog" element={<Catalog />} />
          <Route exat path="/contact" element={<Contact />} />
          {/* <Route exat path="/about_us" element={<AboutUs />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
