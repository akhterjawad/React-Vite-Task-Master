import React from 'react'

import shoes from '../assets/shoe_image.png'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'

const MainContent = () => {
    return (
        <>
            <main>
                <div className='flex flex-wrap ml-10 justify-center mt-10 '><p className=' below-sm:text-[5rem] text-[4rem] font-black text-black leading-none'>YOUR FEET<br />DESERVE<br />THE BEST</p>
                    <div className=''><img className='below-sm-2:w-[450px] w-[80%] ml-9 mt-[5px] below-md:mt-14' src={shoes} alt="shoes-img" /></div>
                </div>
                <div className='below-md:absolute flex flex-col justify-center items-center bottom-[3%] right-[47%] static'>
                    <div className='font-semibold text-center below-md:text-start'>
                        <p>YOUR FEET DESERVE THE BEST CARE AND COMFORT EVERY DAY.</p>
                        <p>WHETHER YOU'RE WALKING, RUNNING, OR RELAXING, TREAT</p>
                        <p>YOUR FEET TO PREMIUM QUALITY SHOES THAT PROVIDE</p>
                        <p>SUPERIOR SUPPORT AND STYLE.</p>
                    </div>
                    <div className='self-center below-md:self-start'>
                        <button className='bg-[#D01C28] mt-3 text-white font-semibold rounded p-1 pl-2 pr-2 text-[1.2rem]'>Shop Now</button>
                        <button className='ml-8 border-[1px] border-black mt-3  font-semibold rounded p-1 pl-2 pr-2 text-[1.2rem]'>category</button>
                    </div>
                    <p className='self-center below-md:self-start mt-5 text-gray-700'>Also Available On</p>
                    <div className="flex items-center self-center below-md:self-start space-x-4">
                        <img src={flipkart} className='' alt="flipkart" />
                        <img src={amazon} className='' alt="amazon" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainContent
