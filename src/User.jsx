import React, { use } from "react";

export default function User({ fetchUsers }) {
  const users = use(fetchUsers);
  console.log(users)
  return (
    <div className="card">
      <h3>Users:</h3>
    </div>
  );
}
