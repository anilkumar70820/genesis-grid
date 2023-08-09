import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import GridNav from './components/GridNav';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [preloading, setPreLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false);
      document.body.classList.remove('overflow-hidden')
    }, 3000);
    document.body.classList.add('overflow-hidden')
  }, []);
  return (
    <>
    {preloading && <Preloader/>}
      <GridNav />
    </>
  );
}

export default App;
