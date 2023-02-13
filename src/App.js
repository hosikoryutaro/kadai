import { BrowserRouter, Route } from "react-router-dom";
import TOP from "./page/TOP";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Route path="/">
        <TOP />
      </Route>
    </BrowserRouter>
  );
}
export default App;
