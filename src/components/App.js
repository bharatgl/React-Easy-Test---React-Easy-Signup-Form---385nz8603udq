import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(
      'A form was submitted with Name :"' +
        name +
        '" and Email :"' +
        email +
        '"'
    );
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3> Sign-up Form </h3>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            id="name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            id="email"
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            id="password"
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
      </header>
    </div>
  );
}
export default App;
