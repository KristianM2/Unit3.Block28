import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
