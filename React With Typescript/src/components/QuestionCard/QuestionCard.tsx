import React from "react";

/* TYPES */

import { AnswerObject } from '../../App';

/* STYLES */

import "./questionCard.scss";
import { ButtonWrapper } from './QuestionStyle';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNmbr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNmbr,
  totalQuestions,
}) => (
  <div className="questionCard__wraper">
    <p className="number">
      Question: {questionNmbr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} /> 
    <div>
    {
      answers.map((answer) => (
        <ButtonWrapper 
          key = {answer}
          correct = {userAnswer?.correctAnswer === answer}
          userClicked = {userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))
      }
    </div>
  </div>
);

export default QuestionCard;
