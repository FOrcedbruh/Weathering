import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Weather from "./components/pages/Weather";
import Map from "./components/pages/Map";
import Settings from "./components/pages/Settings";
import DailyWeather from "./components/DailyWeather";


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
          </Routes>
      </div>
    </section>

    
  )
}



export default App;