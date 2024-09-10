import React, { useEffect, useState } from 'react'
import loading from '../assets/loading.gif'
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [data, setData] = useState(null);
    // `useParams` ko React Router v6 mein is liye use kiya jata hai kyunki yeh hume URL mein mojood dynamic parameters ko access karne ki sahulat deta hai. Jab kisi route mein hum variable parts daalte hain, jaise product ID ya user ID, toh `useParams` se hum uss specific value ko retrieve kar sakte hain aur uske mutabiq apni component ko update kar sakte hain. Yeh bohat useful hota hai jab hume URL ke basis par data dikhana hota hai.
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setData(res)
            }).catch((err) => {
                console.log(err);

            })
    }, [])
    return (
        <>
            <div>SingleProduct {id}</div>
            <div className='flex flex-wrap justify-center items-center'>{data ? (<><div
                className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white rounded shadow-lg overflow-hidden flex flex-col md:flex-row"

            >
                <div className="relative flex items-center justify-center bg-blue-50 w-full">
                    <img
                        src={data.image}
                        alt="product img"
                        className="w-full rounded h-auto object-cover"
                    />
                </div>
                <div className="p-6 md:w-1/2">
                    <div className="text-2xl font-bold text-gray-800">
                        $ {data.price}
                    </div>
                    <div className="text-lg text-gray-600">
                        {data.title}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                        {data.description}
                    </div>
                    <div className="mt-4 flex items-center">
                        <div className="rounded-full flex items-center justify-center bg-gray-200 p-2">
                            <img
                                src={data.image}
                                className="w-[33px] rounded-full h-full"
                                alt=""
                            />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-bold text-gray-800">
                                Product Owner
                            </div>
                            <div className="text-xs text-gray-500">Member since June 2024</div>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
                            Contact Seller
                        </button>
                        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg w-full sm:w-auto">
                            Chat
                        </button>
                    </div>
                    <div className="mt-6">
                        <button
                            className="bg-purple-700 text-white w-full py-2 rounded-lg"
                            id="addToCart"
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className="mt-4 text-sm text-gray-500 flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 18.364l.707-.707a8 8 0 1111.314 0l.707.707m-6.364-6.364a4 4 0 100-8 4 4 0 000 8z"
                            />
                        </svg>
                        Fb Area Karachi
                    </div>
                </div>
            </div>
                <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white rounded shadow-lg overflow-hidden mt-6">
                    <div className="p-6 border-t border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Details</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                            <div>Is Deliverable:</div>
                            <div>No</div>
                            <div>Price:</div>
                            <div>${data.price}</div>
                            <div>Condition:</div>
                            <div>New</div>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white rounded shadow-lg overflow-hidden mt-6">
                    <div className="p-6 border-t border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Description</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            {data.description}
                        </p>
                    </div>
                </div></>
            ) : (<img className=" m-[auto] loading w-[10%] mt-48" src={loading} alt="no img"></img>)}</div>
        </>
    )
}

export default SingleProduct


