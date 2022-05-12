import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
function App() {
  const onDelete = (todo) => {
    console.log(`I'm on delete of ${todo}`);
  };
  let todos = [
    {
      sno: 1,
      titel: 'Go to the market',
      desc: 'You need to go to market to get this job done',
    },
    {
      sno: 2,
      titel: 'Go to the mall',
      desc: 'You need to go to mall to get this job done',
    },
    {
      sno: 3,
      titel: 'Go to the hall',
      desc: 'You need to go to hall to get this job done',
    },
  ];
  return (
    <>
      <Header title="MyTodo List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
