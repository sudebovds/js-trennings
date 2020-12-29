import React from "react";
import "./questionCard.scss";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
  <div>
    <p className="number">
      Question: {questionNmbr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => {
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>;
      })}
    </div>
  </div>
);

export default QuestionCard;
