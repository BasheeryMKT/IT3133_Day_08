import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
          <li><Link to='home'>Home</Link></li>
          <li><Link to='contactus'>ContactUs</Link></li>
          <li><Link to='aboutus'>AboutUs</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        </Routes>
      </Router>
      

    </div>
    
  );
}

export default App;
