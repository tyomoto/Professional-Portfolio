import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Contact';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState('Home')
  return (
    <div className="App">
      <Header state={{page,setPage}}/>
      <Content state={{page,setPage}}/>
      <Footer/>
    </div>
  );
}

export default App;
