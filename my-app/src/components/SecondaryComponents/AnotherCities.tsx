import { useState, useEffect } from 'react';
import style from './../../styles/AnotherCities.module.css';
import { useNavigate } from 'react-router-dom';
import { Info } from '../types/InfoType';
import axios from 'axios';


// src 


const BerlinSrc: string = 'https://api.weatherapi.com/v1/current.json?key=dfed1eda45ca42d2a20143124232608&q=Berlin&aqi=no';
const VashingtonSrc: string = 'https://api.weatherapi.com/v1/current.json?key=dfed1eda45ca42d2a20143124232608&q=Vashington&aqi=no';
const ParisSrc: string = 'https://api.weatherapi.com/v1/current.json?key=dfed1eda45ca42d2a20143124232608&q=Paris&aqi=no';
const TokyoSrc: string = 'https://api.weatherapi.com/v1/current.json?key=dfed1eda45ca42d2a20143124232608&q=Tokyo&aqi=no';
const SidneySrc: string = 'https://api.weatherapi.com/v1/current.json?key=dfed1eda45ca42d2a20143124232608&q=Sidney&aqi=no';



const AnotherCities: React.FC = () => {

    const [Berlin, setBerlin] = useState<Info>({});
    const [Vashington, setVashington] = useState<Info>({});
    const [Paris, setParis] = useState<Info>({});
    const [Tokyo, setTokyo] = useState<Info>({});
    const [Sidney, setSidney] = useState<Info>({});

    useEffect(() => {
        axios.get(BerlinSrc).then(data => {
            setBerlin(data.data.current);
        })
        axios.get(VashingtonSrc).then(data => {
            setVashington(data.data.current);
        })
        axios.get(ParisSrc).then(data => {
            setParis(data.data.current);
        })
        axios.get(TokyoSrc).then(data => {
            setTokyo(data.data.current);
        })
        axios.get(SidneySrc).then(data => {
            setSidney(data.data.current);
        })
    }, [])


    return (
        <section className={`${style.window} window`}>
            <div className={`${style.cities} main`}>
                <ul>
                    <li className='listItem'><h4>Berlin</h4><img src={Berlin.condition?.icon}/><p>{Berlin.condition?.text}</p>{Berlin.temp_c}°</li>
                    <li className='listItem'><h4>Vashington</h4><img src={Vashington.condition?.icon}/><p>{Vashington.condition?.text}</p>{Vashington.temp_c}°</li>
                    <li className='listItem'><h4>Paris</h4><img src={Paris.condition?.icon}/><p>{Paris.condition?.text}</p>{Paris.temp_c}°</li>
                    <li className='listItem'><h4>Tokyo</h4><img src={Tokyo.condition?.icon}/><p>{Tokyo.condition?.text}</p>{Tokyo.temp_c}°</li>
                    <li className='listItem'><h4>Sidney</h4><img src={Sidney.condition?.icon}/><p>{Sidney.condition?.text}</p>{Sidney.temp_c}°</li>
                </ul>
            </div>
        </section>
    )
}



export default AnotherCities;