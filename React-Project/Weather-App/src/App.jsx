import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [addweather, setaddweather] = useState([])
    let inputRef = useRef()

    useEffect(() => {

    }, [checkStatus])

    function checkStatus(event) {
        event.preventDefault()
        if (inputRef.current.value === ``) {
            alert(`please enter city name`)
        }
        // async function getdata() {

        axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
            .then(responce => {
                console.log(responce.data);
                addweather.push(responce.data)
                setaddweather([...addweather])
                console.log(addweather);
            }).catch(error => {
                console.log(error);
                alert(`please check your internet connection or Invalid city name`)
            })
        // }
        // getdata()
        inputRef.current.value = ``
    }

    return (
        <>
            <h1 className='text-center mt-5  font-semibold text-[1.8rem]  sm:text-[2.5rem]'>Weather App</h1>
            <form className='ml-2 mr-2 flex gap-3 justify-center items-center mt-2' onSubmit={checkStatus}>
                <input type="text" className="input input-bordered input-accent w-full max-w-xs" placeholder='Enter city name!' ref={inputRef} />
                <button className="btn hover:bg-[green] border-none  bg-[#23ff23]">Success</button>
            </form>

            <div className="flex flex-wrap justify-center items-center gap-5">
                {(
                    addweather.map((item, index) => (
                        <div key={index} className="card mt-12 ml-3 mr-3 w-[350px] bg-green-500 bg-opacity-30 backdrop-blur-sm text-white shadow-lg rounded-lg p-5">
                            <h2 className="text-2xl font-semibold mb-2">{item.location.name}, {item.location.country}</h2>
                            <p className="text-lg">Temperature: {item.current.temp_c}°C</p>
                            <p className="text-lg">Condition: {item.current.condition.text}</p>
                            <img src={item.current.condition.icon} alt="Weather condition" className="w-12 h-12 mt-3" />
                            <p className="text-sm mt-2">Humidity: {item.current.humidity}%</p>
                            <p className="text-sm">Wind Speed: {item.current.wind_kph} kph</p>
                        </div>
                    ))
                )}
            </div>

        </>
    )
}

export default App