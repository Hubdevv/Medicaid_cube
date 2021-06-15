
import './App.css';
import {BrowserRouter as Router, Switch,
  Route} from 'react-router-dom'
import Home from './pages';
import Connecter from './pages/signin'  
       
       
     

function App() {
  return (
   <Router>
     <Switch> 
     <Route path='/' component={Home} exact/>
     <Route path='/connecter' component={Connecter} exact/> 
    </Switch> 
      
     
    </Router>
  );
}

export default App;
