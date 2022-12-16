import { useEffect } from 'react';
import './App.css';
import {useDispatch} from "react-redux"
import AllRoutes from './Routes/AllRoutes';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getWordOfTheDay())

  },[])
  return (
    <div>
     <AllRoutes />
    </div>
  );
}

export default App;
