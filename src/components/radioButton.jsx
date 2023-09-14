import React from "react";
import "./radio.css";

import styles from "../app/register/page.module.css";

const RadioButton = ({ name, id, value, onChange, checked, text }) => {
  return (
    <label
      htmlFor={id}
      className="radio-label"
      id="radio-label"
      onPointerDown={(e) => {
        const allLabels = document.querySelectorAll("label");
        allLabels.forEach((label) => {
          if (label.classList.contains(styles.labelFocus)){
          label.classList.remove(styles.labelFocus);
          }
        });
        const targetLabel = e.target.parentElement.parentElement.previousSibling || e.target.parentElement.previousSibling;
        if (targetLabel !== null && targetLabel.innerText === "GENDER") {
          console.log(targetLabel)
          targetLabel.classList.add(
            styles.labelFocus
          );
        }
      }}
    >
      <input
        className="radio-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={onChange}
        checked={checked}
      />
      <span className="custom-radio" />
      {text}
    </label>
  );
};

export default RadioButton;
