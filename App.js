import React, { useState } from "react";
function Array() {
  const [items, setItems] = useState([{ name: "Abi", age: 20 }]);
  const [Name, setName] = useState({ name: '' });
  const [Age, setAge] = useState({ age: '' });

  const addToList = () => {
    if (!items.find((item) => item.name === Name.name && item.age === Age.age)) {
      setItems([...items, { id: items.length + 1, name: Name.name, age: Age.age }]);
    } else {
      alert(`${Name.name} is already added`);
    }
  };
  const showjson = (event, field) => {
    if (field === 'name') {
      setName({ name: event.target.value });
    } else {
      setAge({ age: event.target.value });
    }

  }
  return (
    <div>
      <h3>ADD NAME AND AGE TO LIST</h3>
      <div id="container">
        <p>Name</p>
        <input
          type="text"
          value={Name.name}
          onChange={(event) => {
            setName(event.target.value)
            showjson(event, 'name')
          }
          }
        />
      </div>
      <br />
      {JSON.stringify(Name)}
      <div id="type">
        <p>Age</p>
        <input
          value={Age.age}
          onChange={(event) => {
            setAge(event.target.value)
            showjson(event, 'age')
          }
          }
        />
      </div>
      <br />
      {JSON.stringify(Age)}
      <br />
      <button onClick={() => addToList()}>Add</button>
      <ol>
        <u>Name</u>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
      <ul>
        <u>Age</u>
        {items.map((item) => (
          <li key={item.id}>{item.age}</li>
        ))}
      </ul>
    </div>
  );
}
export default Array;