import React from 'react';

const Post = ({ onClose }) => {
  return (
    <div>
      <h1>Post Component</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Post;
