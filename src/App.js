import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
useEffect(() => {
    fetch('https://randomuser.me/api/?page=3&results=10')
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
        setRecords(result.results);
      })
      .catch((error) => console.log(error));
  }, []); 


const filter = (e) => {
  const filteredData = data.filter(
    (user) =>user.name.first.indexOf(e.target.value)>-1);
  setRecords(filteredData);
};

  return (
   <>
    <input type="text"className="form-control"onChange={filter}placeholder="Enter Your name"/>
    <div className="grid-user">
    {records.map((user, index) => (
      <ol>
      <div className="pic">
      <img src={user.picture.medium}/>
        </div>
          <>
        {user.name.title} {user.name.first} {user.name.last}
        <p>{user.login.username}
          </p>
          </>
      
       </ol>
    ))
    }
  </div>
</>

);
};
export default App;
