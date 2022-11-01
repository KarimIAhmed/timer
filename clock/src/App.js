import './App.css';
import Clock from "./components/Clock";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Clock></Clock>
          {/*display changing hours,minutes,seconds, am/pm in center of container*/}
          {/*clicking on one stops timer and changes to input field center button sets it*/}
    </div>
  );
}

export default App;
