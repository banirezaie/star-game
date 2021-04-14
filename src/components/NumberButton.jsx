import "./components.css";

export const NumberButton = ({ value, type }) => {
  const handleClick = e => {
    // e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <button onClick={handleClick} type={type} className='buttons' value={value}>
      {value}
    </button>
  );
};
