import style from './../../styles/Weather.module.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Info } from '../types/InfoType';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import ExploreIcon from '@mui/icons-material/Explore';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Switch from '@mui/material/Switch';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EastIcon from '@mui/icons-material/East';


const ForecastSrc: string = 'https://api.weatherapi.com/v1/forecast.json?key=dfed1eda45ca42d2a20143124232608&q=Moscow&days=10&aqi=no&alerts=no';


// типы

interface ThisWeather {
    city: Info;
    temp: Info;
    hours: Info[]
}


interface ForecastWeather {
    articles: Info[];
}



// компоненты


const Forecast: React.FC<ForecastWeather> = ({articles}) => {
    
    

    return (
        <div className={`${style.forecast} forecast`}>
            {articles.map(article => {return <article key={article.date} className={`${style.forecastItem} forecastItem`}>
                 <Link key={article.date} to={`/${article.date}`} className={`${style.forecastLink} forecastLink`}><p>{article.date}</p> <img src={article.day?.condition?.icon}/><p>{article.day?.condition?.text}</p> <div id={style.forecastTemp}>
                    <ThermostatIcon fontSize='small'/>{article.day?.avgtemp_c}°</div></Link> </article>})}
        </div>
    )
}





const ActualWeather: React.FC<ThisWeather> = ({city, temp, hours}) => {





    return (
        <main className={`${style.main} main`}>
            <h2 className={style.city}>{city.name}</h2>
            <div className={style.text}>{temp.condition?.text} <img src={temp.condition?.icon}/></div>
            <div className={style.temp}>{temp.temp_c}° <span>feels like {temp.feelslike_c}°</span> </div>
            <div className={style.secondaryData}>
                <article ><WaterDropIcon color='primary'/> {temp.humidity}%</article>
                <article ><AirIcon color='primary'/> {temp.wind_kph} kph</article>
                <article ><ExploreIcon color='secondary'/> {temp.pressure_mb} mb</article>
            </div>
            <section className={style.hourlyForecast}>
                
            </section>
        </main>
    )
}




const Weather: React.FC = () => {


    const [city, setCity] = useState<Info>({});
    const [temp, setTemp] = useState<Info>({});
    const [articles, setArticles] = useState<Info[]>([]);
    const [hours, setHours] = useState<Info[]>([]);


    // тема

    const {theme, setTheme} = useTheme();
    const [checked, setChecked] = useState<boolean>(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        if (!checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
        localStorage.setItem('Theme-Btn', JSON.stringify(!checked));
    }


    useEffect(() => {
        axios.get(ForecastSrc).then(data => {
            setArticles(data.data.forecast.forecastday)
            setCity(data.data.location);
            setTemp(data.data.current);
            setHours(data.data.forecast.forecastday.hour)
            console.log(data.data);
            
        })
    }, []);


    return (
        <section className={`${style.weatherWin} window`}>
            <Switch className={style.toggleTheme} checked={checked} onChange={handleChange}/>
            <ActualWeather city={city} temp={temp} hours={hours}/>
            <div className={`${style.anotherWeatherLink} main`}><Link to='/anotherCities'>Weather in other cities</Link><EastIcon color='secondary'/></div>
            <h3>Weather forecast for 10 days</h3>
            <Forecast articles={articles}/>
        </section>
    )
}





export default Weather;