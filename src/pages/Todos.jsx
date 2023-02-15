import FilterTodos from '../components/TodosPage/FilterTodos';
import TodoCardsList from '../components/TodosPage/TodoCardsList';
import { useSelector } from 'react-redux';

const Todos = () => {
  return (
    <div className="w-full p-5 md:p-10">
      <FilterTodos/>
      <TodoCardsList/>
    </div>
  );
}

export default Todos