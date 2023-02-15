import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoCardsList = () => {
    const todos = useSelector((state)=>state.todos)
    const arr = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div>
      <h1 className="text-white mt-3 sm:text-lg">Your tasks today</h1>
      <div
        id="tasks"
        className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 md:gap-8 lg:gap-10 mt-4"
      >
        {
            todos.map((todo)=>{
                return <TodoCard key={todo.id} todo={todo}/>
            })
        }
      </div>
    </div>
  );
}

export default TodoCardsList