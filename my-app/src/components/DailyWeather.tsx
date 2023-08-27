import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const DailyWeather: React.FC = () => {

    const {date} = useParams();

    const src: string = 'https://api.weatherapi.com/v1/forecast.json?key=dfed1eda45ca42d2a20143124232608&q=Moscow&days=10&aqi=no&alerts=no'

    useEffect(() => {
        axios.get(src).then(data => {
            console.log(data.data.forecast.forecastday)
        })
    }, [date])


    return (
        <section>

        </section>
    )
}




export default DailyWeather;