import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';
function App() {
  const onDelete = (todo) => {
    console.log(`I'm on delete of ${todo}`);
    // Deleting this way in react doesn't work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      desc: 'You need to go to market to get this job done',
    },
    {
      sno: 2,
      title: 'Go to the mall',
      desc: 'You need to go to mall to get this job done',
    },
    {
      sno: 3,
      title: 'Go to the hall',
      desc: 'You need to go to hall to get this job done',
    },
  ]);
  return (
    <>
      <Header title="MyTodo List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
