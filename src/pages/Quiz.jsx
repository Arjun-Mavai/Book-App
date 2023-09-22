import { useState } from "react";
// import Question from "./components/Question";
// import Result from "./components/Result";

// const quizData = [
//   {
//     question:
//       "What is the holy scripture of Hinduism that contains a conversation between Prince Arjuna and Lord Krishna?",
//     options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Rigveda"],
//     answer: "Bhagavad Gita",
//   },
//   {
//     question:
//       "Which ancient Indian scripture is known as the oldest layer of Sanskrit literature and consists of hymns to various deities?",
//     options: ["Ramayana", "Bhagavad Gita", "Upanishads", "Rigveda"],
//     answer: "Rigveda",
//   },
//   {
//     question:
//       "What is the primary focus of the Upanishads in Hindu philosophy?",
//     options: [
//       "Religious rituals",
//       "Meditation techniques",
//       "The pursuit of knowledge",
//       "Social ethics",
//     ],
//     answer: "The pursuit of knowledge",
//   },
//   {
//     question:
//       "In the Bhagavad Gita, what role does Lord Krishna play in guiding Arjuna?",
//     options: ["Charioteer", "Warrior", "Healer", "Priest"],
//     answer: "Charioteer",
//   },
//   {
//     question:
//       "Which ancient text explains the principles of yoga, meditation, and the path to spiritual enlightenment?",
//     options: [
//       "Ramayana",
//       "Mahabharata",
//       "Bhagavad Gita",
//       "Yoga Sutras of Patanjali",
//     ],
//     answer: "Yoga Sutras of Patanjali",
//   },
//   {
//     question: "What is the main theme of the Katha Upanishad?",
//     options: [
//       "Self-realization",
//       "Warfare strategy",
//       "Social justice",
//       "Agriculture techniques",
//     ],
//     answer: "Self-realization",
//   },
//   {
//     question:
//       "Which Vedantic text discusses the concept of 'Aham Brahmasmi' (I am Brahman) in its teachings?",
//     options: [
//       "Taittiriya Upanishad",
//       "Bhagavad Gita",
//       "Mundaka Upanishad",
//       "Isha Upanishad",
//     ],
//     answer: "Mundaka Upanishad",
//   },
//   {
//     question:
//       "In Hinduism, what is the term for the cycle of birth, death, and rebirth based on one's karma?",
//     options: ["Samsara", "Nirvana", "Dharma", "Moksha"],
//     answer: "Samsara",
//   },
//   {
//     question:
//       "Which Indian scripture emphasizes the importance of performing one's duty (dharma) without attachment to the results?",
//     options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Rigveda"],
//     answer: "Bhagavad Gita",
//   },
//   {
//     question:
//       "Who is considered the author of the ancient Indian text 'Yoga Sutras'?",
//     options: ["Lord Krishna", "Sage Vyasa", "Sage Patanjali", "Lord Rama"],
//     answer: "Sage Patanjali",
//   },
//   // Add more questions here
// ];

const quizDataHindi = [
  {
    question: "भगवद गीता किस युद्ध के दौरान उपदेश दिए गए थे?",
    options: ["कुरुक्षेत्र", "महाभारत", "रामायण", "पाण्डव"],
    answer: "कुरुक्षेत्र",
    explanation:
      "भगवद गीता कुरुक्षेत्र युद्ध के दौरान भगवान कृष्ण द्वारा अर्जुन को दिए गए उपदेश हैं।",
  },
  {
    question: "भगवद गीता में कितने अध्याय होते हैं?",
    options: ["18", "10", "24", "30"],
    answer: "18",
    explanation:
      "भगवद गीता में कुल मिलाकर 18 अध्याय होते हैं, जिसमें विभिन्न जीवन मूल्यों और धार्मिक सिद्धांतों का वर्णन है।",
  },
  {
    question: "रामायण के किस काण्ड में लक्ष्मण रेखा का वर्णन है?",
    options: ["बालकाण्ड", "अरण्यकाण्ड", "सुंदरकाण्ड", "युद्धकाण्ड"],
    answer: "अरण्यकाण्ड",
    explanation:
      "रामायण के अरण्यकाण्ड में लक्ष्मण रेखा का वर्णन है, जिसे लक्ष्मण ने सीता की सुरक्षा के लिए खींचा था।",
  },
  {
    question: "महाभारत के किस पात्र ने भगवद गीता का गीतन किया?",
    options: ["अर्जुन", "दुर्योधन", "भीम", "कृष्ण"],
    answer: "कृष्ण",
    explanation:
      "भगवान कृष्ण ने महाभारत के कुरुक्षेत्र युद्ध में अर्जुन को भगवद गीता का उपदेश दिया।",
  },
  {
    question: "वेदों में कितने वेद होते हैं?",
    options: ["2", "4", "6", "8"],
    answer: "4",
    explanation:
      "वेदों में कुल मिलाकर 4 वेद होते हैं - ऋग्वेद, सामवेद, यजुर्वेद, और अथर्ववेद।",
  },
  {
    question: "उपनिषदों की कितनी संख्या है?",
    options: ["108", "100", "50", "200"],
    answer: "108",
    explanation:
      "उपनिषदों की कुल संख्या 108 है, जो वेदों का अंतिम भाग माने जाते हैं।",
  },
  {
    question: "भगवद गीता में 'कर्मण्येवाधिकारस्ते' का क्या अर्थ है?",
    options: [
      "कर्म करो, फल की चिंता मत करो",
      "सब कुछ भगवान के हाथ में है",
      "जो होगा अच्छा होगा",
      "कर्म ही पूजा है",
    ],
    answer: "कर्म करो, फल की चिंता मत करो",
    explanation:
      "इसका अर्थ है कि आपका कार्य केवल कर्म करने का है, उसके परिणाम की",
  },
  {
    question:
      "भगवद गीता में भगवान कृष्ण का क्या भूमिका है जिन्होंने अर्जुन के मार्गदर्शन किया?",
    options: ["रथ सवार", "योद्धा", "चिकित्सक", "पुजारी"],
    answer: "रथ सवार",
  },
  {
    question:
      "किस प्राचीन ग्रंथ में योग, ध्यान, और आत्मिक उन्नति का मार्ग बताया गया है?",
    options: ["रामायण", "महाभारत", "भगवद गीता", "पतंजलि के योग सूत्र"],
    answer: "पतंजलि के योग सूत्र",
  },
  {
    question: "कथा उपनिषद का मुख्य विषय क्या है?",
    options: [
      "आत्म-साक्षात्कार",
      "युद्ध रणनीति",
      "सामाजिक न्याय",
      "कृषि तकनीक",
    ],
    answer: "आत्म-साक्षात्कार",
  },
  {
    question:
      "किस वेदांतिक ग्रंथ में 'अहम् ब्रह्मास्मि' (मैं ब्रह्म हूँ) का आदान-प्रदान किया गया है?",
    options: ["तैत्तिरीय उपनिषद", "भगवद गीता", "मुण्डक उपनिषद", "ईशा उपनिषद"],
    answer: "मुण्डक उपनिषद",
  },
  {
    question:
      "हिन्दू धर्म में, 'संसार' का क्या मतलब है, जो किसी के कर्म के आधार पर जन्म, मृत्यु, और पुनर्जन्म का चक्र है?",
    options: ["संसार", "निर्वाण", "धर्म", "मोक्ष"],
    answer: "संसार",
  },
  {
    question:
      "कौन-सा भारतीय ग्रंथ मानव अधिकारों के साथ अपने कर्तव्य (धर्म) का पालन करने के महत्व को बताता है?",
    options: ["रामायण", "महाभारत", "भगवद गीता", "रिगवेद"],
    answer: "भगवद गीता",
  },
  {
    question: "प्राचीन भारतीय ग्रंथ 'योग सूत्र' के लेखक कौन माने जाते हैं?",
    options: ["भगवान कृष्ण", "महर्षि व्यास", "महर्षि पतंजलि", "भगवान राम"],
    answer: "महर्षि पतंजलि",
  },
];

function Quiz() {
  // State variables to keep track of the current question, user's answer, and score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Function to handle when the user submits an answer
  const handleAnswerSubmit = () => {
    // Check if the user's answer matches the correct answer for the current question
    if (userAnswer === quizDataHindi[currentQuestion].answer) {
      // If the answer is correct, increment the score
      setScore(score + 1);
    }
    setAnswer(true);

    // Check if there are more quizDataHindi to display
    setTimeout(() => {
      if (currentQuestion < quizDataHindi.length - 1) {
        // If there are more quizDataHindi, move to the next question and reset the user's answer
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer("");
        setAnswer(false);
      } else {
        setCurrentQuestion(quizDataHindi.length); // handling the condition for the last question
      }
    }, 4000);
  };

  return (
    <div className="bg-slate-950 text-white 200 min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-md">
        {currentQuestion < quizDataHindi.length ? (
          // Display the current question if there are more quizDataHindi to show
          <div>
            <h1 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1} of {quizDataHindi.length}
            </h1>
            <h2 className="text-lg mb-4">
              {quizDataHindi[currentQuestion].question}
            </h2>
            <ul className="space-y-2">
              {/* Map over the answer options for the current question */}
              {quizDataHindi[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  // Apply CSS classes conditionally based on user's answer
                  className={`p-2 cursor-pointer rounded-lg hover:bg-slate-800 ${
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
                  }  `}
                  onClick={() => {
                    if (!answer) {
                      setUserAnswer(option);
                      setSelectedIndex(index);
                    }
                  }}
                >
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
            {userAnswer && quizDataHindi[currentQuestion].explanation}
            <br />
            {userAnswer && quizDataHindi[currentQuestion].answer}
          </div>
        ) : (
          // Display the result if there are no more quizDataHindi
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              Your Score: {score}/{quizDataHindi.length}
            </h1>
            <p className="text-lg">
              {score >= quizDataHindi.length / 2
                ? "Congratulations! You passed the Quiz."
                : "Keep practicing! You can do better."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
