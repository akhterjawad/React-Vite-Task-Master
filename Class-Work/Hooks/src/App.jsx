import { useState, useRef, useEffect } from 'react'

// 1. Functional-Based Programming:
// Functional-based programming React mein modern aur recommended tareeqa hai. Ismein hum functions ka use karte hain components banane ke liye. Yeh functions simple JavaScript functions hote hain jo kuch JSX return karte hain. Functional components stateless hote hain, lekin React hooks (like useState, useEffect, etc.) ka use karke, hum in mein state aur lifecycle methods handle kar sakte hain.

// example of Functional-based programming is name changer or given blow

// Key Points:
// Simple function jo JSX return karta hai.
// Hooks ka use kar ke state aur side-effects handle kiye jaate hain.
// Less code, zyada readable.


// Agar aapko functional component mein state ya lifecycle methods ki zaroorat ho, to aap hooks ka use karte hain.





// 2. Class-Based Programming:
// Class-based programming mein hum ES6 classes ka use karte hain components banane ke liye. Yeh pehle React mein zyada common tha, lekin ab functional components zyada prefer kiye jaate hain. Class components mein state aur lifecycle methods directly class ke andar handle kiye jaate hain.


// Key Points:
// ES6 class ka use karte hain component banane ke liye.
// this.state aur this.setState ka use kar ke state manage hoti hai.
// render() method mein JSX return hota hai.

// Example: Class Component

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Mia'
//     };
//   }

//   changeName = () => {
//     this.setState({ name: 'React Developer' });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.state.name}!</h1>
//         <button onClick={this.changeName}>Change Name</button>
//       </div>
//     );
//   }
// }




// SUMMARY:
// Functional components: Simple functions hote hain, hooks ke through state aur lifecycle methods handle kiye jaate hain. Yeh React mein naya standard hai.
// Class components: ES6 classes ka use kar ke banaye jaate hain, state aur lifecycle methods directly class ke andar handle hoti hain.








// HOOKS

// name changer

// Hum useState React mein is liye use karte hain kyun ke yeh humein functional components mein state manage karne ka tareeqa faraham karta hai. Iska matlab yeh hai ke aap apni app ke andar variables ya data ko store kar sakte hain jo ke dynamically change hota hai, jaise user input ya kisi action ke result mein. useState ke through aap initial state set karte hain aur phir usko update karne ke liye ek function milta hai. Yeh React apps ko interactive aur dynamic banata hai.


// function App() {
//   const [name, setName] = useState('Mia');

//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <button onClick={() => setName('React Developer')}>Change Name</button>
//     </div>
//   );
// }





// Hum useRef React hook ka istemal tab karte hain jab humein kisi DOM element ya component ka reference store karna ho, taake hum uss element ya component ka direct access rakh sakein,

// input value 

// const App = () => {

//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     // Input field par focus lagane ke liye hum inputRef ka use kar rahe hain
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </>
//   )
// }



// React mein side-effects handle karne ke liye hum useEffect hook ka use karte hain.

// Hum useEffect React mein is liye istemal karte hain kyunki ye humein component lifecycle events ko handle karne ka tareeqa deta hai, jaise ke component ka render hona, update hona ya destroy hona. Ye function side effects ko manage karne ke liye use hota hai, jaise ke API calls, DOM manipulation, ya subscriptions.


// counter app

// const App = () => {

//   const [countAdd, setCountAdd] = useState(0);
//   const [countLess, setCountLess] = useState(0)

// // useEffect function 

//   useEffect(() => { 
//     console.log(`useEffect run`);
//   },[countAdd]); // Dependency array

//   return (
//     <>
//       <p>countAdd: {countAdd}</p>
//       <p>countLess: {countLess}</p>
//       <button onClick={() => setCountAdd(countAdd + 1)}>Increase</button>
//       <button onClick={() => setCountLess(countLess - 1)}>Decrease</button>
//     </>
//   )
// }


// export default App




// 1. STATE:

// Example: Socho tum aik counter bana rahe ho jo button press karne se increase hota hai. Us counter ki value ko tum state mein store karoge.

// Yahan count state hai, jo initial value 0 se shuru hoti hai. setCount function ka use karke, tum is state ko update kar sakte ho.


// 2. Side-Effects:

// React mein side-effects handle karne ke liye hum useEffect hook ka use karte hain.
// Example: Socho tumhe component ke render hone ke baad kisi API se data fetch karna hai.


function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await axios("https://jsonplaceholder.typicode.com/users")
  //     console.log(res.data)
  //     setData(res.data);

  //   }
  //   getData()
  // }, [])

  let [array, setArray] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setArray([...json]);
        });
    }
    getData();
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      {/* {array.length > 0 ? (
        array.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )} */}
      {array.length ? array.map((item) => {
        return <div key={item.id}>
          <p>{item.name}</p>
        </div>
      }) : <h1>Loading...</h1>}
    </>
  );
}



export default App