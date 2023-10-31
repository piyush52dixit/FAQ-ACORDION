import React, { useState } from "react";
import "./Question.css";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Question = (props) => {
  const [open, setOpen] = useState(false);
  const toggleHandler = () => {
    setOpen((open) => !open);
  };
  return (
    <>
      <section>
        <div className="ques">
          <h1> {props.questions.title}</h1>
          <button onClick={toggleHandler}>
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
        {open && <p> {props.questions.info}</p>}
      </section>
    </>
  );
};

export default Question;
