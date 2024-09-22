import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Column from '../column';
import './board.css';
import { optionsGroupBy, optionsSortBy } from '../../constants';
import getGroupedTickets from '../../lib/utils';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(() => localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(() => localStorage.getItem('sortBy') || 'priority');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_KEY);
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching tickets', error);
      }
    };

    fetchTickets();
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const groupedTickets = getGroupedTickets(users, tickets, groupBy, sortBy);

  return (
    <>
      <nav>
        <h1>Kanban Board</h1>

        <label>
          Grouping
          <select
            name='Grouping'
            defaultValue={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
            placeholder="Group by"
          >
            {optionsGroupBy.map((item, index) => (
              <option value={item.value} key={index}>{item.label}</option>
            ))}
          </select>
        </label>

        <label>
          Sorting
          <select
            name='Sorting'
            defaultValue={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            placeholder="Sort by"
          >
            {optionsSortBy.map((item, index) => (
              <option value={item.value} key={index}>{item.label}</option>
            ))}
          </select>
        </label>
      </nav>

      <div className="board">
        {Object.keys(groupedTickets).map((group) => (
          <Column key={group} title={group} tickets={groupedTickets[group]} />
        ))}
      </div>
    </>
  );
};

export default Board;
