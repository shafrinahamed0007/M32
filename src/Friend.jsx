import React from 'react';

const Friend = ({friend}) => {
    const {name, email, phone} = friend;
  return (
    <div className='card'>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Friend;