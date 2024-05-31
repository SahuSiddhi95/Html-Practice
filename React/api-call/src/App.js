import logo from './logo.svg';
import './App.css';
import react ,{ useEffect, useState} from 'react'                

function App() {
  const[data , setData] = useState([])
 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=8") .then((result)=>{
    result.json().then((resp)=>{
      // console.warn("result",resp)
      setData(resp)
    })
   })
 },[])

console.warn(data)
return     (
  <div className="App">
   <h1> GET API CALL </h1>
   <table border="1">
    <tr>
      <td>ID</td>
      <td>NAME</td>
      <td>TITLE</td>
      <td>BODY</td>
     
    </tr>
    {
       data.map((list)=>
      <tr>
        <td>{list.userId}</td>
      <td>{list.id}</td>
      <td>{list.title}</td>
      <td>{list.body}</td>
      </tr>
       )
    }
  
   </table>
  </div>
  <two/>
);
}


export default App;
