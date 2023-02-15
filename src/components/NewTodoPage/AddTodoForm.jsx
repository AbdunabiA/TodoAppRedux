import AddNewButton from "../../ui/AddNewButton"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/todoSlice"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const AddTodoForm = () => {
    const [title, setTitle] = useState('')
    const [todoDes, setTodoDes] = useState('')
    const [expireyDate, setExpireyDate] = useState(null)

    const user = useSelector((state)=>state.user)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours()
        let minutes = date.getMinutes()
        const dateTime = `${day}-${month}-${year} ${hour}-${minutes}`;
        dispatch(
          addTodo({
            name: user.email.match(/[a-z]+/i)[0],
            date: dateTime,
            title,
            expireyDate,
            description: todoDes,
          })
        );
        navigate('/todos')
        
    }
  return (
    <form className="mt-5" onSubmit={submitHandler}>
      <label htmlFor="title" className="text-white">
        Title:
      </label>
      <br />
      <input
        type="text"
        placeholder="Title"
        className="p-1 rounded-md focus:outline-none"
        onChange={(e)=>setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="todo" className="text-white">
        Todo:
      </label>
      <br />
      <textarea
        name="todoDes"
        id="todo"
        cols="30"
        rows="8"
        className="w-full rounded-md p-2 shadow-md focus:outline-none"
        placeholder="Write your todo here"
        onChange={(e)=>setTodoDes(e.target.value)}
      ></textarea>
      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="date" className="text-white">
            Expirey date:
          </label>
          <br />
          <input
            onChange={(e) => setExpireyDate(e.target.value)}
            type="datetime-local"
            className="p-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <AddNewButton />
        </div>
      </div>
    </form>
  );
}

export default AddTodoForm