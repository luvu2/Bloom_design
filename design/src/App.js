import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Intro from './Intro';
import Login from './Login';
import Signup from './Signup';

function App() {
  // const [time, setTime] = useState(null);

  // useEffect(() => {
  //   effect()
  // },[])
  
  // useEffect(() => {
  //   history.pushState({
      
  //   })
  // },[time])
  // const effect = () => {

  // }
  
  return (
    <div className="app">
      <Route exact path='/' component={Intro}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </div>
  );
}

export default App;
