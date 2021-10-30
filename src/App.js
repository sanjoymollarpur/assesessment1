
import './App.css';
import {useState} from 'react';
function App() {
  const [com1, setcom1] = useState(null);
  const [com2, setcom2] = useState(null);
  function fun1(){
    if(com1===null)
    {
      setcom1(<div className="box box1">
      <h3>This is created using functional component</h3>
      <p  className="para">This is using external CSS</p>
      <p style={{color:"blue"}}>This is using external CSS</p>
    </div>);
    }
    else{
      setcom1(null);
    }
    console.log(com1);
  }
  function fun2(){
    if(com2===null)
    {
      setcom2(<div className="box box2">
      <h3>This is created using functional component</h3>
      <p  className="para">This is using external CSS</p>
      <p style={{color:"blue"}}>This is using external CSS</p>
    </div>);
    }
    else{
      setcom2(null);
    }
  }
  return (
    <div className="App">
      <h1>Styling using Functional and class Component</h1>
      <div className="button-div">
        <button className="btn btn1" onClick={fun1}>To see styling functional component</button>
        <button className="btn btn2" onClick={fun2}>To see styling class component</button>
      </div>
      <div className="card-div">
          {com1}
          {com2}
       {/* <div className="box box1">
          <h3>This is created using functional component</h3>
          <p  className="para">This is using external CSS</p>
          <p style={{color:"blue"}}>This is using external CSS</p>
        </div> */}
        {/* <div className="box box2">
          <h3>This is created using functional component</h3>
          <p  className="para">This is using external CSS</p>
          <p style={{color:"blue"}}>This is using external CSS</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
