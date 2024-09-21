import React from 'react';
import Card from '../card';
import './column.css';

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <h3>{title} <span>{tickets.length}</span></h3>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
