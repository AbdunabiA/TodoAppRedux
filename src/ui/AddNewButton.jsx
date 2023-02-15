

const AddNewButton = ({clickHandler}) => {
  return (
    <button onClick={clickHandler} className="text-white bg-purple-600 text-xs sm:text-md md:text-lg sm:px-6 sm:py-1 p-1 rounded-md">
      + Add new
    </button>
  );
}

export default AddNewButton