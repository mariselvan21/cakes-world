import Login from './components/login';
import './App.css';
import Header from './components/header';
import ProductHolder from './components/product_holder';
import {useState,useEffect} from 'react';
import Description from './components/description';






function App() {

  const[islogedin,setIslogedin]=useState("false");

  function loginHandler(value){
    localStorage.setItem('login',value)
    setIslogedin(value);

  }

  useEffect(() => {
    var storage=localStorage.getItem('login');
    setIslogedin(storage);

  },[])

  return (
    <div className="App">
      <Header></Header>
      {
        islogedin=="true"? <button onClick={() => {
          loginHandler(false);
        }}>log out</button>:<Login login={loginHandler}></Login>
      }
      <Description></Description>
      {
        islogedin=="true" && <ProductHolder ></ProductHolder>
      }
      
    </div>
    
  )
}

export default App;
