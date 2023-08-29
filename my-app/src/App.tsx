import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Weather from "./components/pages/Weather";
import Map from "./components/pages/Map";
import Settings from "./components/pages/Settings";
import DailyWeather from "./components/DailyWeather";
import AnotherCities from "./components/SecondaryComponents/AnotherCities";

const App: React.FC = () => {





  return (
    <section className="wrapper">
      <Layout />
      <div className="container">
          <Routes>
            <Route path="/" element={<Weather />}/>
            <Route path="/:date" element={<DailyWeather />}/>
            <Route path="/Map" element={<Map />}/>
            <Route path="/Settings" element={<Settings />}/>
            <Route path="/AnotherCities" element={<AnotherCities />}/>
          </Routes>
      </div>
    </section>

    
  )
}



export default App;