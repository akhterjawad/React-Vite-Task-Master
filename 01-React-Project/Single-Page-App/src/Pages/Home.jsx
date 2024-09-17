import React, { useEffect, useState } from 'react';
import loading from '../assets/loading.gif';
import bg_img from '../assets/store-clothing-shop-bouique1.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    const singleUser = (item) => {
        navigate(`SingleProduct/${item.id}`);
    };

    return (
        <>
            {/* <img src={bg_img} className='w-[100%] h-auto' alt="no img" /> */}
            {/* <h1 className='relative text-[#ffe4c4] bottom-[400px] text-center font-bold md:text-[3rem] text-xl'>Elevate Your Wardrobe <br /> <br /> with the Best Trends</h1> */}
            <h1 className='text-center sm:mt-4 mt-1 font-extrabold sm:text-4xl text-xl'>Flash Sale</h1>

            <div className='mt-5 pb-5 flex flex-wrap gap-3 items-center justify-center'>
                {data ? data.map(item => (
                    <div key={item.id} className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[25.3rem]">
                        <span className=''>
                            <img
                                className="rounded-t-lg w-[9rem] h-[9rem] mt-2 mx-auto object-contain"
                                src={item.image}
                                alt="no-img"
                            />
                        </span>
                        <div className="p-5">
                            <span>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.category}
                                </h5>
                            </span>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {item.title}
                            </p>
                            <p className='font-semibold mb-4'>Price: {item.price}</p>
                            <span
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
                            </span>
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
