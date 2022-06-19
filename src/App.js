import './App.css';
import Navbar from './component/Navbar';
import Movie from './component/movies ';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




function App() {

  return (
   
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/movies'>
          <Movie/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
