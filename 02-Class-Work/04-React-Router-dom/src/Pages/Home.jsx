import React, { useEffect, useState } from 'react';

const Home = () => {

  const [data, setData] = useState(null);

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setData(json)
    }).catch(err => console.log(err));


  return (
    <>
      {data ? data.map((item) => {
        return <div key={item.id}>
          <p>{item.name}</p>
        </div>
      }) : <h1>Loading...</h1>}
    </>
  );
};

export default Home;
