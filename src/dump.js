/*import React, { useState } from 'react';

const initialList = [
  { id: '1', name: 'suhel', age: '20' },
  { id: '2', name: 'suhel', age: '40' }
];

export default function App() {
  const [lists, setLists] = useState(initialList);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setLists([...lists, { id: String(lists.length + 1), name: 'suhel', age: newComment }]);
      setNewComment(''); // Clear the input field
    }
  };

  const listItems = lists.map((list) => (
    <li key={list.id}>
      <p>
        <b>{list.name}</b> age is {list.age}
      </p>
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
