import React, { use } from "react";
import Friend from "./Friend";

export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  console.log(friends);
  return <div className="card">
    <h3>Total Friends: {friends.length}</h3>
    {
        friends.map(friend =><Friend key={friend.id} friend = {friend}></Friend>)
    }
  </div>;
}
