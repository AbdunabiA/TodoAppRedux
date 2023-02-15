import Select from "../ui/Select";
import AddNewButton from "../ui/AddNewButton";
import DragAndDrop from "../components/NewTodoPage/DragAndDrop";
import AddTodoForm from "../components/NewTodoPage/AddTodoForm";

const NewTodo = () => {
  return (
    <div className="w-full p-5 md:p-10">
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-white">
            Create a new <b className="text-red-600">task</b>
          </h1>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-5">
          <div>
            <Select
              data={[
                { value: "Alena Curtis", text: "Alena Curtis" },
                { value: "Arthur Watts", text: "Arthur Watts" },
                { value: "Theodore Gomez", text: "Theodore Gomez" },
              ]}
            />
          </div>
          <div>
            <AddNewButton clickHandler={() => {}} />
          </div>
        </div>
      </div>
      <DragAndDrop/>
      <AddTodoForm/>
    </div>
  );
}

export default NewTodo