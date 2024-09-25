import React, { useEffect } from 'react'

const Cards = () => {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setData(res), console.log(res))
            .catch(err => console.log(err));
    }, []);
    return (
        <>

        </>
    )
}

export default Cards
