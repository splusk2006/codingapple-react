import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, changeTitle] = useState([
    "남자 코드 추천",
    "강남 우동 맛집",
    "가가이썬 독학",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>This is blog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "HOHOH";
          changeTitle(copy);
        }}
      >
        Change Title
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          changeTitle(copy);
        }}
      >
        Arrange
      </button>

      <div className="list">
        <h4>{title[0]}</h4>
        <p>Content</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>Content</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>Content</p>
      </div>

      <Modal/>
      
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>Hello Today</p>
      <p>Content</p>
    </div>
  );
}

export default App;
