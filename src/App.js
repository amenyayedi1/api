import './App.css';
import React, { useState,useEffect } from 'react';

function App(){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUsers = ()=> {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => res.json())
       .then((data)=> setUsers(data))
       .catch((err) => console.log(err));
    };
    getUsers();
    setLoading(false);
    console.log(users);
  },[])
  return(
  <div className="App">
    {loading ? <h1>loading...</h1> : 
    users.map((el) => 
    <div style={{border:'1px solid black'}}> 
      <h3> {el.email} </h3>
    <p> {el.name} </p>
    </div>
   )
    }
    
  </div>
  );
}

export default App;
