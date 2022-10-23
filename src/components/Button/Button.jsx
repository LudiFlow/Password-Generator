import React from "react";

export default function Button(props) {
  const [buttonOn, setButtonOn] = React.useState(false);

  function buttonToggle() {
    setButtonOn((prevButtonOn) => !prevButtonOn);
  }

  return (
    <div className="button-list">
      <div
        onClick={buttonToggle}
        id={props.id}
        className={buttonOn ? "checkbox-on" : "checkbox-off"}
      ></div>
      ;<p className="font-color-white">{props.desc}</p>
    </div>
  );
}
