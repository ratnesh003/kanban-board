# Kanban Board

#### The frontend assignment completed in recat.js the Kanban Board with highly dynamic user interface. The data is fetched from API and grouped in 3 ways and sorted in 2 ways i.e. in total six possible combinations can be viewed by the user. 

![thumbnail](/public/image.png)

The application should offer three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Users should also be able to sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.


## Endpoint Specifications
#### The data given from the API endpoint for the task is as follows :
<details>
  <summary>
    respones data on API fetch
  </summary>

```yaml
{
  tickets: [
    {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      tag: [
        "Feature request"
      ],
      userId: "usr-1",
      status: "Todo",
      priority: 4
    },
    {
      id: "CAM-2",
      title: "Add Multi-Language Support - Enable multi-language support within the application.",
      tag: [
        "Feature Request"
      ],
      userId: "usr-2",
      status: "In progress",
      priority: 3
    },
    {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: [
        "Feature Request"
      ],
      userId: "usr-2",
      status: "In progress",
      priority: 1
    },
    {
      id: "CAM-4",
      title: "Implement Email Notification System",
      tag: [
        "Feature Request"
      ],
      userId: "usr-1",
      status: "In progress",
      priority: 3
    },
    {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: [
        "Feature Request"
      ],
      userId: "usr-5",
      status: "In progress",
      priority: 0
    },
    {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: [
        "Feature Request"
      ],
      userId: "usr-2",
      status: "Todo",
      priority: 1
    },
    {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: [
        "Feature Request"
      ],
      userId: "usr-1",
      status: "Backlog",
      priority: 2
    },
    {
      id: "CAM-8",
      title: "Implement Role-Based Access Control (RBAC)",
      tag: [
        "Feature Request"
      ],
      userId: "usr-3",
      status: "In progress",
      priority: 3
    },
    {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: [
        "Feature Request"
      ],
      userId: "usr-5",
      status: "Todo",
      priority: 2
    },
    {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: [
        "Feature Request"
      ],
      userId: "usr-4",
      status: "Backlog",
      priority: 1
    }
  ],
  users: [
    {
      id: "usr-1",
      name: "Anoop sharma",
      available: false
    },
    {
      id: "usr-2",
      name: "Yogesh",
      available: true
    },
    {
      id: "usr-3",
      name: "Shankar Kumar",
      available: true
    },
    {
      id: "usr-4",
      name: "Ramesh",
      available: true
    },
    {
      id: "usr-5",
      name: "Suresh",
      available: true
    }
  ]
}
```
</details> 
  <br/>
  <br/>
  <br/>
  
**The priority levels for the tickets are as follows:**
- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (This values you will receive in the api)** <br/>
4 - Urgent <br/>
3 - High <br/>
2 - Medium <br/>
1 - Low <br/>
0 - No priority <br/>
 
Additionally, the application save's the user's view state even after page reload.


## TechStack
1. React.JS + css
2. axios library
3. react icon


## To Run the project

1. clone the project
run the below commands in the terminal to clone the project
```
git clone https://github.com/ratnesh003/kanban-board.git
cd kanban-board
```
this will create a folder **kanban-board** which will have the sources code of the project

2. install the dependencies
```
npm install
```

3. finally run
```
npm start
```
the project will be running on the following url : 
[http://localhost:3000/](http://localhost:3000/)
