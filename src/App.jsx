import "./App.css";
import React, { useState, useEffect } from "react";
import CreateJokes from "./button";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

return (
    <div className="App">
      <div className="App-header">
        <h1>Programming Jokes</h1>
        <ul className="joke-list">
          {jokes.map((joke) => (
            <li key={joke.id}>
              {joke.type === "single" ? (
                <div>
                  <strong>Single Joke:</strong> {joke.joke}
                </div>
              ) : (
                <div>
                  <strong>Setup & Delivery Joke:</strong>
                  <br />
                  {joke.setup}
                  <br />
                  {joke.delivery}
                </div>
              )}
            </li>
          ))}
        </ul>
        <CreateJokes />
      </div>
    </div>
  );
}

export default App;