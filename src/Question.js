import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [ques, Setques] = useState(false);

  const btnclicked = () => {
    Setques(true);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => Setques(!ques)}>
          {ques ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {ques && <p>{info}</p>}
    </article>
  );
};

export default Question;
