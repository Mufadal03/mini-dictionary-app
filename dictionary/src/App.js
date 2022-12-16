import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import {useDispatch} from "react-redux"
import { getWordOfTheDay } from './redux/WordRedux/action';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getWordOfTheDay())

  },[])
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_TITLE}</h1>
    </div>
  );
}

export default App;
