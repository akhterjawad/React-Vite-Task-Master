import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

const SingleStudent = () => {
    const [data, setData] = useState(null);
    // `useParams` ko React Router v6 mein is liye use kiya jata hai kyunki yeh hume URL mein mojood dynamic parameters ko access karne ki sahulat deta hai. Jab kisi route mein hum variable parts daalte hain, jaise product ID ya user ID, toh `useParams` se hum uss specific value ko retrieve kar sakte hain aur uske mutabiq apni component ko update kar sakte hain. Yeh bohat useful hota hai jab hume URL ke basis par data dikhana hota hai.
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
            <div>SingleStudent {id}</div>
            <h1>{data ? data.name : "loading..."}</h1>
        </>
    )
}

export default SingleStudent