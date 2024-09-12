import React, { useEffect, useState } from 'react';
import loading from '../assets/loading.gif';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const images = [
        "https://img.lazcdn.com/us/domino/2912e82c-0f85-4bb3-ae77-c168885b6b87_PK-1976-688.jpg_1200x1200q80.jpg_.webp",
        "https://img.lazcdn.com/us/domino/689ac4aa-f9e1-44cb-aee9-4457d7ac1e20_PK-1976-688.jpg_1200x1200q80.jpg_.webp",
        "https://img.lazcdn.com/us/domino/719394b0-4b8f-4451-ae61-ba36f2363309_PK-1976-688.jpg_1200x1200q80.jpg_.webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const singleUser = (item) => {
        navigate(`SingleProduct/${item.id}`);
    };

    return (
        <>
            <div className="relative sm:mt-5 mt-0 w-full">
                {/* Carousel Wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Render active image */}
                    <img
                        src={images[currentIndex]}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="carousel"
                    />
                </div>

                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-blue-600' : 'bg-gray-400'}`}
                            aria-label={`Slide ${idx + 1}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>

                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <svg
                            className="w-4 h-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                    </span>
                </button>

                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <svg
                            className="w-4 h-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </span>
                </button>
            </div>

            <h1 className='text-center sm:mt-4 mt-1 font-extrabold sm:text-4xl text-xl'>Flash Sale</h1>

            <div className='mt-5 pb-5 flex flex-wrap gap-3 items-center justify-center'>
                {data ? data.map(item => (
                    <div key={item.id} className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[25.3rem]">
                        <a href="#" className=''>
                            <img
                                className="rounded-t-lg w-[9rem] h-[9rem] mt-2 mx-auto object-contain"
                                src={item.image}
                                alt="no-img"
                            />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.category}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {item.title}
                            </p>
                            <p className='font-semibold mb-4'>Price: {item.price}</p>
                            <a
                                href="#"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => singleUser(item)}
                            >
                                Buy Now
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                )) : (
                    <img className="loading w-[10%] mt-24 mb-24" src={loading} alt="no img" />
                )}
            </div>
        </>
    );
};

export default Home;
