import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";

function QuizApp() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const selectedOption = useRef([]);

  // API handling
  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((response) => {
        console.log(response.data);
        setQuizData(shuffleArray(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Shuffle array function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Handle next question
  function handleNextQuestion() {
    console.log(quizData.length);

    const selectedAnswer = selectedOption.current.find((input) => input.checked);

    if (!selectedAnswer) {
      alert("Please select an option");
      return;
    }

    const selectedValue = selectedAnswer.value;
    console.log("Selected answer:", selectedValue);

    // Update score based on selected answer
    if (selectedValue === quizData[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      console.log(correctAnswers);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      console.log(incorrectAnswers);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex >= quizData.length - 0) {
      setIsQuizComplete(true);
      alert(`Quiz Complete. Your score is ${correctAnswers}/10`);
      setQuizData(shuffleArray(quizData));
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
    }

    selectedOption.current.forEach((input) => {
      if (input) {
        input.checked = false;
      }
    });
  }

  // Return JSX with TailwindCSS
  return (
    <>
      {quizData.length > 0 ? (
        <div className="min-h-screen mr-3 ml-3 bg-gray-100 flex items-center justify-center">
          {!isQuizComplete ? (
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
              <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Quiz App</h1>
              <h2 className="text-xl font-semibold mb-4">
                Q{currentQuestionIndex + 1}: {quizData[currentQuestionIndex].question.text}
              </h2>
              <hr className="border-blue-300 mb-4" />
              <div className="space-y-2">
                <ol className="space-y-4">
                  {shuffleArray([
                    ...quizData[currentQuestionIndex].incorrectAnswers,
                    quizData[currentQuestionIndex].correctAnswer,
                  ]).map((answer, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        id={answer}
                        name="quiz"
                        type="radio"
                        value={answer}
                        ref={(el) => (selectedOption.current[index] = el)}
                        className="mr-2"
                      />
                      <label className="text-lg" htmlFor={answer}>
                        {answer}
                      </label>
                    </li>
                  ))}
                </ol>
              </div>
              <button
                className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="bg-white ml-3 mr-3 shadow-lg rounded-lg p-8 w-full max-w-xl text-center">
              <h1 className="text-4xl font-bold text-green-600 mb-6">Quiz Complete</h1>
              <h3 className="text-2xl font-semibold">{`Final Score: ${correctAnswers}/10`}</h3>
              <div className="mt-4">
                <h3 className="text-xl font-medium">{`Correct Answers: ${correctAnswers}`}</h3>
                <h3 className="text-xl font-medium">{`Wrong Answers: ${incorrectAnswers}`}</h3>
                <h1 className="text-2xl font-bold mt-4">Total: 10</h1>
                <button
                  className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            {/* <span className="mt-4 text-gray-500">Loading...</span> */}
          </div>
        </div>
      )}
    </>
  );
}

export default QuizApp;
