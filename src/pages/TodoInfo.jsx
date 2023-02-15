import ImagesContainer from "../components/TodoInfoPage/ImagesContainer"
import Todo from "../components/TodoInfoPage/Todo"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const TodoInfo = () => {
  const params = useParams()
  const todo = useSelector((state) => state.todos).filter(
    (todo) => todo.id == params.id
  );
  return (
    <div className="w-full p-5 md:p-10">
      <ImagesContainer/>
      <Todo todo={todo[0]}/>
    </div>
  )
}

export default TodoInfo