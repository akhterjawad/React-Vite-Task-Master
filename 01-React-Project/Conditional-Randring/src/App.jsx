import React, { useState, useEffect } from 'react';

const App = () => {
  const [age, setAge] = useState(1);

  useEffect(() => {
    { age === 0 ? (alert('Age cannot be less than 1.'), setAge(1)) : age }
  }, [age]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="ml-1 mr-1 bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-blue-500">Gym Admission</h1>

        <div className="space-y-4">
          <h2 className="text-xl text-gray-700">
            Age of guy: <span className="font-semibold text-blue-600">{age}</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center sm:gap-5 gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={() => setAge(age + 1)}
            >
              Add Age
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={() => setAge(age - 1)}
            >
              Subtract Age
            </button>
          </div>

          <div className="mt-6">
            {age < 15 ? (
              <p className="text-red-500 font-medium">You're still a kid, dear. 😅</p>
            ) : age >= 18 ? (
              <p className="text-green-500 font-medium">Hey brother, where have you been? Join immediately! 💪</p>
            ) : (
              <p className="text-yellow-500 font-medium">
                You can join, but you have to pay 1000 extra. 🤑
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;





// import { useEffect, useState } from 'react'

// function App() {
//   const [age, setAge] = useState(1)
//   useEffect(() => {
//     console.log('jawad');

//     { age === 0 ? (alert('age is not blow 0'), setAge(1)) : age }
//   }, [age])

//   return (
//     <>
//       <h1>{age}</h1>
//       <h1>{age < 12 ? <p>chota ho</p> : age >= 18 ? <p>ajao jaldi</p> : <p>ajao 1000 daka</p>} </h1>
//       <button onClick={() => setAge(age + 1)}>add</button><br /><br />
//       <button onClick={() => setAge(age - 1)}>less</button>
//     </>
//   )
// }

// export default App
