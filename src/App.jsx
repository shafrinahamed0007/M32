import { Suspense, useState } from "react";

import "./App.css";

import Counter from "./Counter";
import Batsman from "./Batsman";
import Bowler from "./Bowler";
import User from "./User";
import Friends from "./Friends";
import Posts from "./Posts";
import Todos from "./Todos";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const allPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json(),
);

const fetchTodos = fetch("https://jsonplaceholder.typicode.com/todos").then(
  (res) => res.json(),
);

function App() {
  const friendsPromise = fetchFriends();
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Click 3");
  };

  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>Todos Loading...</h3>}>
        <Todos fetchTodos={fetchTodos}></Todos>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUsers={fetchUsers}></User>
      </Suspense>
      <Suspense fallback={<h3>Friends Loading...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Posts Loading...</h3>}>
        <Posts allPosts={allPosts}></Posts>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>
      <Bowler></Bowler>
      {/* <Batsman></Batsman> */}
      {/* <button onClick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Click 2");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={() => alert("Click 4")}>Click 4</button> */}
      {/* <button onClick={handleClick5(7)}>Click add 5</button> */}
    </>
  );
}

export default App;
