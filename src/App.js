import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import ErrorPage from './Components/ErrorPage';
import UserDetail from './Components/UserDetail';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App(props) {
  console.log(props)
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="/home/:userId" element={<UserDetail />} />
          
           <Route path="/about" element={<About/>} />

          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
