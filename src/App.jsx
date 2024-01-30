import React, { useState } from 'react';
import './App.css'; // Import file CSS

const App = () => {
  const [value, setValue] = useState("");
  const [nameList, setNameList] = useState([]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onAddName = () => {
    if (value.trim() !== "") {
      setNameList((prevList) => [...prevList, value.trim()]);
      setValue(""); // Reset giá trị input sau khi thêm vào danh sách
    }
  };

  return (
    <div className="app-container">
      <form className='login'>
        <h1>Login</h1>
        <input
          id="input"
          value={value}
          onChange={onChangeInput}
          placeholder="Enter your name"
        />
        <button type="button" onClick={onAddName}>Login</button>
      </form>

      <div className="name-list">
        <h2>Name List:</h2>
        <ul>
          {nameList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
