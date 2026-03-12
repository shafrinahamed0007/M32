import React, { use } from "react";

export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  console.log(friends);
  return <div className="card">
    <h3>Total Friends: {friends.length}</h3>
  </div>;
}
