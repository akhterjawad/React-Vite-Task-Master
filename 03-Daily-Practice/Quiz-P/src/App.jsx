import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  let [QuizData, setQuizData] = useState([])
  useEffect(() => {

    axios("https://the-trivia-api.com/v2/questions")
      .then((response) => {
        console.log(response.data);
        setQuizData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <>
      <h1>Quiz App</h1>
      {QuizData.length > 0 ? QuizData.map(item => {
        return (
          
            <div key={item.id}>
              <p>{item.question.text}</p>
            </div>
          
        )
      }) : <h1>loading</h1>}
    </>
  )
}

export default App
