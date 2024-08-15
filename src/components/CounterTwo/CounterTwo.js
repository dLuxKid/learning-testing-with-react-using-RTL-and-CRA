export const CounterTwo = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <h4>{count}</h4>
      {handleIncrement && <button onClick={handleIncrement}>Increase</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrease</button>}
    </div>
  );
};
