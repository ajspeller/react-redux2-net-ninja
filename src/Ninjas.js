import React from 'react';
import './Ninjas.css';

// UI Component
const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((n) => {
    if (n.age > 20) {
      return (
        <div className='List' key={n.id}>
          <span>Name: {n.name}, </span>
          <span>Page: {n.age}</span>
          <span>Belt: {n.belt}</span>
          <button
            onClick={() => {
              deleteNinja(n.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  return <div className='Ninja'>{ninjaList}</div>;
};

export default Ninjas;
