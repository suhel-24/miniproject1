import React, { useState } from 'react';
import {initialList} from "./data.js"


export default function App() {
  const [lists, setLists] = useState(initialList);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setLists([...lists, { id: String(lists.length + 1), name: 'suhel', age: newComment }]);
      setNewComment('');
    }
  };

  const handleCommentDelete = (id) => {
    const updatedList = lists.filter((comment) => comment.id !== id);
    setLists(updatedList);
  };

  const listItems = lists.map((list) => (
    <li key={list.id}>
      <p>
        <b>{list.name}</b> age is {list.age}
      </p>
      <button onClick={() => handleCommentDelete(list.id)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <main style={{ backgroundColor: 'cyan' }}>
        <ul style={{ height: '100px', width: '100%' }}>{listItems}</ul>
      </main>
      <input
        type="text"
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment"
      />
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
}
