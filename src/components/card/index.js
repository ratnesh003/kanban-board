import React from 'react';
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import './card.css';

const Card = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h5>{ticket.id}</h5>
      <h5>{ticket.title}</h5>
      <div className='tags'>
        <div className='tag-icon'>
          <BsFillExclamationSquareFill color='#6b7280' />
        </div>
        {
          ticket.tag.map((item, index) => (
            <div className='tag-item' key={index}>
              <GoDotFill color='#6b7280' size={10} /> {item}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Card;
