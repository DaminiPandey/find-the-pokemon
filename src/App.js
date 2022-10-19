import Header from './Components/Header';
import  Container  from './Components/Container';
import './App.css';
import {useRef,useState} from 'react'

function App() {
  const navRef = useRef();
  const [timeOn, setTimeOn] = useState(true);
  const [time, setTime] = useState(0); 

  return (
    <div className="App">
      <Header navRef= {navRef} timeOn={timeOn} setTimeOn={setTimeOn} time={time} setTime={setTime}/>
      <Container navRef= {navRef} timeOn={timeOn} setTimeOn={setTimeOn} time={time} setTime={setTime}/>
    </div>
  );
}

export default App;
