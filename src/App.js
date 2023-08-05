import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home.js';
import Loader from './components/loader';

  function App() {
    const [loading, setLoading] = useState(false)
    useEffect(() =>{
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      }, 3000)
    }, [])

  return (
    <>
    {
      loading? <Loader/> :
      <Home />
    }

    </>
  );
}

export default App;
