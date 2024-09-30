import React from 'react'

const NavbarBlow = ({ PageName }) => {
    return (
        <>
            <div className='border bg-white'>
                <h1 className=' sm:ml-24 m-6 ml-10 font-bold text-[1.7rem] sm:text-[2.3rem]'>{PageName}</h1>
            </div>
        </>
    )
}

export default NavbarBlow
