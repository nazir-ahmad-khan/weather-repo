import { WiFog } from "react-icons/wi";
import './Weather.css';
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaCloud, FaCloudBolt, FaCloudMoonRain, FaCloudRain } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import { BsPlusSquareFill } from "react-icons/bs";

function Weather() {
    // const [city, setCity] = useState("");
    // const [wDetail, setWdetail] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    // const getWeatherData = (event) => {
    //     setIsLoading(true);
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04ebe51b0aca4eb14c1528798a99686f&units=metric`)
    //         .then((response) => response.json())
    //         .then((finalResponse) => {
    //             if (finalResponse.cod == "404") {
    //                 setWdetail(undefined);
    //             } else {
    //                 setWdetail(finalResponse);
    //             }
    //             setIsLoading(false);
    //         })
    //     event.preventDefault();
    //     setCity("")
    // }


    const [showSearch, setShowSearchPlus] = useState(true);
    const [city, setCity] = useState("");
    const [weatherDetail, setWeatherDetail] = useState("");

    const gatData = (e) =>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=201c9d2afc524e38a2d74240260301&q=${city}`)
        .then((res) => res.json())
        .then((finalRes) =>{
            console.log(finalRes);
            setWeatherDetail(finalRes);
            
        })
        setCity("")
        e.preventDefault();
    }

    return (
        <>
           
            {/* <div className="prante-container">
                <div className="second-container">
                    <h1>Simple Weather App</h1>
                    <form action="" onSubmit={getWeatherData} className="todo-form">
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City Name" />
                        <button>Submit</button>
                    </form>
                    <div className="detail-container">
                        <div>
                            {
                                isLoading ?
                                    <>
                                        <h3>Loading...</h3>
                                    </> :
                                    null
                            }
                        </div>
                        {
                            wDetail !== undefined ?
                                <>
                                    <h3>{wDetail.name} <span className="country-code" >{wDetail.sys.country}</span></h3>
                                    <h2>{wDetail.main.temp}</h2>
                                    <img src={`https://api.openweathermap.org/img/w/${wDetail.weather[0].icon}.png`} />
                                    <p>{wDetail.weather[0].description}</p>
                                </>
                                : "No Data"
                        }
                    </div>
                </div>
            </div> */}


            <div className="main-container">
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <div className="sub-container">

                        <div className="search">
                            <i>  <IoMdSettings /> </i>
                            <div className="prant-searchBox">
                                <i onClick={() => setShowSearchPlus(!showSearch)} > <BsPlusSquareFill /> </i>
                                {
                                    showSearch && (
                                        <form onSubmit={gatData} className="search-box">
                                            <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="Search City..." />
                                        </form>
                                    )}
                            </div>
                            </div>
                            </div>
{
    weatherDetail !==undefined ?
    <>
    <div className="extra-detail-container">
                    <div className="info-weather">
                            <h2>{weatherDetail?.location?.name} <span>{weatherDetail?.location?.country}</span>
                            </h2>
                            {/* <h3>Saturday 03 January</h3> */}
                            <h3> {weatherDetail?.location?.localtime} </h3>
                            <img src={`https:${weatherDetail?.current?.condition?.icon}`}/> <span>{weatherDetail?.current?.temp_c}°</span>
                            <h3>6°/10° Feels like 5°</h3>
                            <h3> {weatherDetail?.current?.condition?.text} </h3>
                    </div>

                    <h3 className="update-date">Updated: {weatherDetail?.current?.last_updated} </h3>


                        <div className="updated-weathers">
                            <div className="child-time-container">
                                <h3>00:00</h3>
                                <i> <FaCloud /> </i>
                                <h3> <IoWaterOutline /><span>76%</span> </h3>
                                <h3>9°</h3>
                            </div>

                            <div className="child-time-container">
                                <h3>01:00</h3>
                                <i> <FaCloud /> </i>
                                <h3> <IoWaterOutline /><span>76%</span> </h3>
                                <h3>9°</h3>
                            </div>
                            <div className="child-time-container">
                                <h3>02:00</h3>
                                <i> <FaCloud /> </i>
                                <h3> <IoWaterOutline /><span>76%</span> </h3>
                                <h3>9°</h3>
                            </div>
                            <div className="child-time-container">
                                <h3>03:00</h3>
                                <i> <FaCloud /> </i>
                                <h3> <IoWaterOutline /><span>76%</span> </h3>
                                <h3>9°</h3>
                            </div>
                            <div className="child-time-container">
                                <h3>04:00</h3>
                                <i> <FaCloud /> </i>
                                <h3> <IoWaterOutline /><span>76%</span> </h3>
                                <h3>9°</h3>
                            </div>
                        </div>

                        <div className="updated-weathers-days">
                            <div className="child-day-container">
                                <h3>Thu</h3>
                                <i> <FaCloudRain /> </i>
                                <p> Patchy rain possible </p>
                                <h3>6°/10°</h3>
                                <h3>8°</h3>
                            </div>
                            <div className="child-day-container">
                                <h3>Fri</h3>
                                <i> <FaCloudRain /> </i>
                                <p> Overcast <br /><br /> </p>
                                <h3>1°/8°</h3>
                                <h3>6°</h3>
                            </div>
                            <div className="child-day-container">
                                <h3>Sat</h3>
                                <i> <FaCloudRain /> </i>
                                <p> Patchy rain possible </p>
                                <h3>6°/12°</h3>
                                <h3>10°</h3>
                            </div>
                        </div>

                        <div className="updated-weathers">
                            <div className="child-weather-container-info">
                                <h3> <i><FaCloudRain /> Humidity</i>  <span>71%</span></h3>
                                <h3> <i><FaCloudRain /> Pressure</i><span>1001.0 mb</span></h3>
                                <h3> <i><FaCloudRain /> Wind Speed</i><span>29.9 kph</span></h3>
                                <h3> <i><FaCloudRain /> Wind Direction</i><span>W</span></h3>
                                <h3> <i><FaCloudRain /> Precipitation</i><span>0.1 mm</span></h3>
                                <h3> <i><FaCloudRain /> Visibility</i><span>10.0 km</span></h3>
                                <h3> <i><FaCloudRain /> UV Index</i><span>2</span></h3>
                            </div>
                        </div>
                        <div className="updated-weathers">
                            <div className="child-weather-container-info">
                                <h3> <i><FaCloudRain /> Sunrise</i><span>07:08 AM</span></h3>
                                <h3> <i><FaCloudRain /> Sunset</i><span>05:22 PM</span></h3>
                                <h3> <i><FaCloudRain /> Moonrise</i><span>09:49 AM</span></h3>
                                <h3> <i><FaCloudRain /> Moonset</i><span>No moonset</span></h3>
                            </div>
                        </div>
                        <div className="updated-weathers">
                            <div className="child-weather-container-info">
                                <h3> <i><FaCloudRain /> Having Rain</i><span>Yes</span></h3>
                                <h3> <i><FaCloudRain /> Chance of Rain</i><span>73%</span></h3>
                                <h3> <i><FaCloudRain /> Having Snow</i><span>No</span></h3>
                            </div>
                        </div>


            </div>
    </>:
    "null"
}
            

                </div>
            </div>
        </>
    )
}
export default Weather;