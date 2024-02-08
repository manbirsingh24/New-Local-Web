import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./App.css";

function App() {
  const api = {
    key: "11681b0954bd40370c8101e26c37bca3",
    base: "https://api.openweathermap.org/data/2.5/weather?",
  };

  return (
    <>
      <Navbar />
      <Body api={api}/>
    </>
  );
}

export default App;
