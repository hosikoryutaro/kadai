import React, { useState } from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export const App = () => {
  const [omikuji, setOmikuji] = useState("引く");
  const onClickOmikuji = () => {
    let arr = ["大吉", "小吉", "中吉", "吉", "凶", "大凶"];
    let index = Math.floor(Math.random() * arr.length);
    setOmikuji(arr[index]);
  };
  return (
    <>
      <p className="btn" onClick={onClickOmikuji}>
        {omikuji}
      </p>
    </>
  );
};

export default App;
