import { priorityNames } from "../constants";

const getGroupedTickets = (users, tickets, groupBy, sortBy) => {
    let groupedTickets = {};

    if (groupBy === 'status') {
        groupedTickets = tickets.reduce((acc, ticket) => {
            (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
            return acc;
        }, {});
    } else if (groupBy === 'user') {
        groupedTickets = tickets.reduce((acc, ticket) => {
            (acc[ticket.userId] = acc[ticket.userId] || []).push(ticket);
            return acc;
        }, {});

        Object.keys(groupedTickets).map((key) => {
            const user = users.find(user => user.id === key)
            groupedTickets[user.name] = groupedTickets[key];
            delete groupedTickets[key];
        })

    } else if (groupBy === 'priority') {
        groupedTickets = tickets.reduce((acc, ticket) => {
            (acc[ticket.priority] = acc[ticket.priority] || []).push(ticket);
            return acc;
        }, {});

        Object.keys(groupedTickets).map((key) => {
            const name = priorityNames.find(prior => prior.id == key)
            groupedTickets[name.value] = groupedTickets[key];
            delete groupedTickets[key];
        })
    }

    if (sortBy) {
        Object.keys(groupedTickets).forEach(key => {
            groupedTickets[key] = groupedTickets[key].sort((a, b) => {
                if (sortBy === 'priority') return b.priority - a.priority;
                if (sortBy === 'title') return a.title.localeCompare(b.title);
            });
        });
    }

    return groupedTickets;
};

export default getGroupedTickets;