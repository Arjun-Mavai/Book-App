import { useEffect } from "react";
import { useState } from "react";
// import Question from "./components/Question";
const intiatStartTime = Date.now();
const quizDataHindi = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A server-side scripting language",
      "A database management system",
      "An operating system",
    ],
    answer: "A JavaScript library for building user interfaces",
    explanation:
      "React is a JavaScript library used for building user interfaces in web applications.",
  },
  {
    id: 2,
    question:
      "Which hook in React is used for side effects in function components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useEffect",
    explanation:
      "The useEffect hook is used for side effects in React function components, such as data fetching and DOM manipulation.",
  },
  {
    id: 3,
    question: "What is JSX in React?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "JavaScript Syntax",
      "JavaScript Framework",
    ],
    answer: "JavaScript XML",
    explanation:
      "JSX stands for JavaScript XML and is a syntax extension for JavaScript used in React to describe the structure of user interfaces.",
  },
  {
    id: 4,
    question: "What is the purpose of the useState hook in React?",
    options: [
      "To fetch data from a server",
      "To manage component state",
      "To define custom hooks",
      "To create context providers",
    ],
    answer: "To manage component state",
    explanation:
      "The useState hook is used in React to manage component-level state, allowing components to re-render when the state changes.",
  },
  {
    id: 5,
    question: "What is the virtual DOM in React?",
    options: [
      "A virtual reality interface",
      "An in-memory representation of the actual DOM",
      "A debugging tool",
      "A web browser extension",
    ],
    answer: "An in-memory representation of the actual DOM",
    explanation:
      "The virtual DOM is an in-memory representation of the actual DOM elements in a web page, used for optimizing updates and rendering in React.",
  },
  {
    id: 6,
    question: "What is the purpose of React Router?",
    options: [
      "To style React components",
      "To manage application state",
      "To handle client-side routing",
      "To interact with a database",
    ],
    answer: "To handle client-side routing",
    explanation:
      "React Router is a library used in React applications to handle client-side routing and navigation.",
  },
  {
    id: 7,
    question: "What is the significance of Redux in React applications?",
    options: [
      "To manage component styling",
      "To handle asynchronous operations",
      "To manage global state",
      "To generate documentation",
    ],
    answer: "To manage global state",
    explanation:
      "Redux is a state management library used in React applications to manage global state and make it accessible to all components.",
  },
  {
    id: 8,
    question: "What is the purpose of the useMemo hook in React?",
    options: [
      "To perform memoization of expensive calculations",
      "To handle component lifecycle events",
      "To fetch data from an API",
      "To create reusable components",
    ],
    answer: "To perform memoization of expensive calculations",
    explanation:
      "The useMemo hook is used to memoize expensive calculations in React to optimize performance by avoiding unnecessary re-computation.",
  },
  {
    id: 9,
    question: "What is the role of props in React?",
    options: [
      "To manage component state",
      "To define custom hooks",
      "To pass data from parent to child components",
      "To style components",
    ],
    answer: "To pass data from parent to child components",
    explanation:
      "Props in React are used to pass data from parent to child components, enabling the transfer of information between components.",
  },
  {
    id: 10,
    question: "What is the purpose of the useContext hook in React?",
    options: [
      "To create custom hooks",
      "To handle component styling",
      "To manage context data in functional components",
      "To fetch data from an API",
    ],
    answer: "To manage context data in functional components",
    explanation:
      "The useContext hook in React is used to manage and access context data in functional components, making it available without prop drilling.",
  },
];

function Quiz() {
  // State variables to keep track of the current question, user's answer, and score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [name, setName] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hasEnteredName, setHasEnteredName] = useState(false);
  const [timesTaken, setTimesTaken] = useState([]);
  const [startTime, setStartTime] = useState(intiatStartTime);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };
  //  12000 ms === 2 min 60s 1000 ms
  // Function to handle when the user submits an answer
  useEffect(() => {
    const savedTimes = JSON.parse(localStorage.getItem("timesTaken"));
    if (savedTimes) {
      setTimesTaken(savedTimes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timesTaken", JSON.stringify(timesTaken));
  }, [timesTaken]);

  const handleAnswerSubmit = () => {
    if (userAnswer === quizDataHindi[currentQuestion].answer) {
      setScore((score) => score + 1);
    }
    setAnswer(true);

    setUserAnswer(userAnswer); // Updated directly
    setTimesTaken([...timesTaken, Date.now() - startTime]);

    setTimeout(() => {
      if (currentQuestion < quizDataHindi.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer(""); // Reset to an empty string
        setSelectedIndex(null); // Reset selected index
        setAnswer(false);
      } else {
        setCurrentQuestion(quizDataHindi.length);
      }
    }, 1000);
  };

  return (
    <div className=" grainy bg-rad text-black font-bold  200 min-h-screen flex items-center justify-center">
      {!hasEnteredName ? (
        <label htmlFor="">
          <input
            className="w-full border-t-teal-500 border-b-rose-500 border-l-green-500 mb-4 py-2 px-4 border rounded focus:outline-none focus:border-blue-500 placeholder-gray-400 text-base text-gray-700 bg-gray-100 hover:bg-gray-200"
            type="text"
            value={name}
            placeholder="Enter your name here"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="border py-2 px-4 rounded-lg shadow-lg shadow-green-600 text-gray-100 bg-gradient-to-r from-lime-500 via-rose-400 to-amber-600"
            onClick={() => setHasEnteredName(true)}
          >
            Add Name
          </button>
        </label>
      ) : currentQuestion < quizDataHindi.length ? (
        <div className="p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1} of {quizDataHindi.length}
            </h1>
            <h2 className="text-lg mb-4">
              {quizDataHindi[currentQuestion].question}
            </h2>
            <ul className="space-y-2">
              {quizDataHindi[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer rounded-lg hover:bg-blue-400 ${
                    answer
                      ? index === selectedIndex &&
                        userAnswer !== quizDataHindi[currentQuestion].answer
                        ? "bg-red-400"
                        : index ===
                          quizDataHindi[currentQuestion].options.indexOf(
                            quizDataHindi[currentQuestion].answer
                          )
                        ? "bg-green-400"
                        : ""
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    checked={userAnswer === option}
                    name="radio"
                    value={option}
                    onChange={() => {
                      if (!answer) {
                        setUserAnswer(option);
                        setSelectedIndex(index);
                      }
                    }}
                  />
                  {option}
                </li>
              ))}
            </ul>
            <button
              onClick={handleAnswerSubmit}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Answer
            </button>
            &nbsp;&nbsp; <br /> <br />
            {/* {userAnswer && quizDataHindi[currentQuestion].explanation} */}
            <br />
            {/* {userAnswer && quizDataHindi[currentQuestion].answer} */}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            <h1>Result</h1>
            {name} : Your Score: {score}/{quizDataHindi.length}
          </h1>
          <p className="text-lg">
            {score >= quizDataHindi.length / 2
              ? `Congratulations ${name}! You passed the Quiz.`
              : "Keep practicing! You can do better."}
          </p>
          {quizDataHindi.map((question, index) => (
            <div className="display" key={index}>
              <h1>Explanations</h1>
              <h2>{question.question}</h2>
              <p>Selected Answer : {userAnswer[index]}</p>
              <p>Correct Answer : {question.answer}</p>
              <p>
                Time taken : {formatTime(timesTaken[index])}
                ms
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
