import React, { useState } from "react";
import "./app.scss";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";

//Components
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { type } from "os";

const TOTLA_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTLA_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      {console.log(fetchQuizQuestions(TOTLA_QUESTIONS, Difficulty.MEDIUM))}
      <p className="score">Score: </p>
      <p>Loading questions ...</p>
      {/*<QuestionCard
        questionNmbr={number + 1}
        totalQuestions={TOTLA_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />*/}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
