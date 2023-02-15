import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { completeTodo } from "../../redux/todoSlice";

const Todo = ({todo}) => {
  const {id,title, description, name, completed} = todo
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const complete = () =>{
    dispatch(completeTodo({id}))
    navigate('/todos')
  }

  return (
    <div className="w-full p-5 rounded-md shadow-lg mt-5 bg-gray-200">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
      <div className="w-full flex items-center justify-between">
        <p className="font-bold">{name}</p>
        {!completed && (
          <button
            className="px-6 py-1 font-bold bg-purple-600 text-white rounded-md"
            onClick={complete}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo