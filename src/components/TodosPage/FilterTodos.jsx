import AddNewButton from "../../ui/AddNewButton";
import Select from "../../ui/Select";
import { useNavigate } from "react-router-dom";

const FilterTodos = ({tasksCount}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h1 className="sm:text-lg md:text-xl lg:text-2xl text-white">
          You’ve got <b className="text-purple-600">7 tasks</b> today
        </h1>
      </div>
      <div className="flex items-center space-x-1 sm:space-x-5">
        <div>
          <Select
            data={[
              { value: "today", text: "Your tasks today" },
              { value: "yesterday", text: "Your tasks yesterday" },
              { value: "tomorrow", text: "Your tasks tomorrow" },
            ]}
          />
        </div>
        <div>
          <AddNewButton clickHandler={() => navigate("/todos/new")} />
        </div>
      </div>
    </div>
  );
}

export default FilterTodos