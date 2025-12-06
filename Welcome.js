import React from 'react';
import './Welcome.css'; // import the css file

export default function Welcome() {
  const username='Dhanshree';

  return (
    // <h2 className="header">Welcome user to React components !!!</h2>
    <h2 className="header">Welcome {username} to React !!!</h2>
    // <h2 className = 'col-4 border border-primary rounded'>Dhanshree</h2>
  )
}
