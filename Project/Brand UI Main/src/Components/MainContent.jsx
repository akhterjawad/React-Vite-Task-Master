import React from 'react'

import shoes from '../assets/shoe_image.png'

const MainContent = () => {
    return (
        <>
            <main>
                <div className='flex flex-wrap ml-10 justify-center mt-10 '><p className=' below-sm:text-[5rem] text-[4rem] font-black text-black leading-none'>YOUR FEET<br />DESERVE<br />THE BEST</p>
                    <div className=''><img className='w-[450px] ml-9 mt-[5px] below-md:mt-14' src={shoes} alt="shoes-img" /></div>
                </div>
                <div className='below-md:absolute flex flex-col justify-center items-center bottom-[13%] right-[47%] static'>
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
                </div>
            </main>
        </>
    )
}

export default MainContent
