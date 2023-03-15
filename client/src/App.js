import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { Detail } from "./components/DetailtPage/Detail";
import { CountryId} from "./components/CountriId/CountryId";
import { Navegation } from "./components/Navegation/Navegation";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { useSelector } from "react-redux";

function App() {
  const { navigate } = useSelector((state) => state.countries);
  const [imageInfo, setImageInfo] = useState('')
  return (
    <div className="App">
      {navigate && <Navegation />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home setImageInfo={setImageInfo}/>} />
        <Route path="/createActivity" element={<Detail />} />
        <Route path="/viewCountry/:id" element={<CountryId imageInfo={imageInfo}/>} />
      </Routes>
    </div>
  );
}

export default App;
