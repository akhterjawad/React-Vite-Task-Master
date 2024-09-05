import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [addweather, setaddweather] = useState(null)
    let inputRef = useRef()

    useEffect(() => {

    }, [checkStatus])

    function checkStatus(event) {
        event.preventDefault()
        axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
            .then(responce => {
                console.log(responce.data);
                setaddweather(responce.data)
                // console.log(addweather);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <h1 className='text-center mt-5  font-semibold text-[2.5rem]'>Weather App</h1>
            <form className='flex gap-3 justify-center items-center mt-2' onSubmit={checkStatus}>
                <input type="text" className="input input-bordered input-accent w-full max-w-xs" placeholder='Enter city name!' ref={inputRef} />
                <button className="btn hover:bg-[green] border-none  bg-[#23ff23]">Success</button>
            </form>

            <div>
                {addweather && addweather.forecast && addweather.forecast.forecastday ? (
                    addweather.forecast.forecastday.map((item, index) => (
                        <div key={index}>
                            <h1>Date: {item.date}</h1>
                            <h1>Max Temp: {item.day.maxtemp_c}°C</h1>
                            <hr />
                        </div>
                    ))
                ) : (
                    'loading'
                )}
            </div>

        </>
    )
}

export default App