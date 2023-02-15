

const Select = ({changeHandler, data}) => {
  return (
    <select
      onChange={changeHandler}
      name="cars"
      id="cars"
      className="border-black border sm:px-6 sm:py-1 p-1 rounded-md text-xs sm:text-md md:text-lg cursor-pointer"
    >
      {data.map((option)=>{
        return (
            <option key={option.value} value={option.value}>{option.text}</option>
        )
      })}
    </select>
  );
}

export default Select