
import { FiMapPin, FiWind } from 'react-icons/fi';
import './WeatherApp.css';
import { BiSearch } from "react-icons/bi";
import { format } from 'date-fns';
import { useState } from 'react';

function WeatherApp() {

    const [city, setCity] = useState("");
    const [weatherDetail, setWeatherDetail] = useState();
    const [isLoadingPage, setIsLoadingPage] = useState(false);

    const gatWeatherbyCity = (event) => {
        setIsLoadingPage(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04ebe51b0aca4eb14c1528798a99686f&units=metric`)
            .then((resp) => resp.json())
            .then((finalResp) => {
                if (finalResp.cod == "404") {
                    setWeatherDetail(undefined)
                } else {
                    setWeatherDetail(finalResp);
                }
                setIsLoadingPage(false);
            })
        event.preventDefault()
        setCity("")
    }

    const randerDate = () => {
        let now = new Date();
        return format(now, "dd-MMMM-yyyy")
    }
    return (
        <>
            <div className="main" >

                <div className='second-new-container'>
                    <h1 className='title'>Weather App</h1>

                    <form className="searchBox" onSubmit={gatWeatherbyCity} >
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Enter City Name' />
                        <button className='search-icon' type='submit' ><BiSearch /> </button>
                    </form>
                    <div style={{ width: "100%" }}>
                        {
                            isLoadingPage ?
                                <>
                                    <h1>Page Loading...</h1>
                                </> :
                                null
                        }
                        {
                            weatherDetail !== undefined ?
                                <>
                                    <div className="info-container">
                                        <div className='country-container'>
                                            <i><FiMapPin /></i>
                                            <h1> {weatherDetail?.name} <span>{weatherDetail?.sys?.country}</span></h1>
                                        </div>
                                        <p className='datetext'> {randerDate()} </p>
                                        <div className='sky'>
                                            <h3>{weatherDetail?.weather[0].description}</h3>
                                        </div>
                                        <div className='temp'>
                                            <h1>{weatherDetail.main.temp} <span>&deg;C</span></h1>
                                        </div>
                                        <h3>Feels Like {weatherDetail.main.feels_like} <span>&deg;C</span></h3>
                                        <div className='wind'>
                                            <h3> <FiWind /> Wind is {Math.round(weatherDetail.wind.speed * 1.94384)} Knots in {weatherDetail.wind.deg}&deg;</h3>
                                        </div>
                                    </div>
                                </> :
                                (
                                    <div className="info-container">
                                        <h4>No Data Found !</h4>
                                    </div>
                                )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
export default WeatherApp;