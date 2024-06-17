import React from "react";
import ReactDOM from "react-dom";
import { NameTag } from "./NameTag";
import { names } from "./data";
import "./styles.css";

// callback fcn
// mapping over the individual names
const renderNameTag = (name) => (
  // use the component + unique id + actual name
  // for each name in the array, return a NameTag component
  // that grabs the first name and the id of each
  <NameTag key={name.id} name={name.firstName} />
);

// app component
// needs to be turned into an explicit array as we need to return something
const App = () => {
  // the array that we are mapping over
  // and the variable we are storing the new array from map in
  const NameTagElements = names.map(renderNameTag);
  // return the ui elements
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
