import alena from '../../assets/AlenaCurtis.png'
import {TiTick} from 'react-icons/ti'
import {TbLetterX} from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../redux/todoSlice'
import { useNavigate } from 'react-router-dom'

const TodoCard = ({todo}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id,name,date, description, expireyDate, completed} = todo

  const deleteT = () => {
    dispatch(deleteTodo({id}))
  }
  const gotoTodo = (e) => {
    if(e.target.id !== 'delete') {
      navigate(`/todos/${id}`)
    }
  }
  return (
    <div className="bg-gray-300 rounded-md p-5 cursor-pointer hover:bg-purple-400 duration-300" 
      onClick={gotoTodo}
    >
      <div className="flex items-center space-x-5">
        <div className="rounded-full border overflow-hidden">
          <img src='' alt="user" className="rounded-full" />
        </div>
        <div>
          <div className="flex items-center justify-between text-gray-700">
            <p className="font-bold text-black">{name}</p>
            <p className="text-xs">{date}</p>
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="">
          <p>
            <b>Expiration:</b> {expireyDate}
          </p>
        </div>
        <div>
          {completed ? (
            <p className="px-6 py-1 bg-green-300 rounded-2xl text-green-900 font-bold flex items-center">
              <TiTick />
              success
            </p>
          ) : (
            <p id='delete' className="px-6 py-1 bg-red-300 rounded-2xl text-red-900 font-bold flex items-center cursor-pointer hover:bg-purple-600 hover:text-white duration-300"
            onClick={deleteT}
            >
              <TbLetterX />
              refuse
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoCard