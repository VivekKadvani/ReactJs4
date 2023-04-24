import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import ErrorPage from './Components/ErrorPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About/>} />

          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
