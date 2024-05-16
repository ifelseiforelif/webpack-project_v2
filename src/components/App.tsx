import React, { useState } from "react";
import "./App.scss";

export const App = () => {
  const [title, setTitle] = useState<String>("React Project");
  return (
    <div>
      {title}
      <button
        onClick={() => {
          setTitle((prevState) => prevState + " + Webpack");
        }}
      >
        Start
      </button>
    </div>
  );
};
