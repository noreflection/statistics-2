import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';

//todo: fetch data from api
let cardList = [
  {
    id: 1,
    title: "Read the book",
    description: "I should reat the whole book",
    status: "in-progress",
    tasks: []

  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },
];

render(<KanbanBoard cards={cardList} />, document.getElementById('root'));