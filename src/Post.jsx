import React from 'react';

const Post = ({post}) => {
    const {title, body} = post;
  return (
    <div className="card">
        <p>Post Name: {title}</p>
        <p>Description: {body}</p>
      
    </div>
  );
};

export default Post;