import { connect } from "react-redux";

function Counter({ count, step, dispatch }) {
  const dec = () => {
    // setCount (count-step)
    const action = { type: "decrement" };
    dispatch(action);
  };

  const inc = () => {
    const action = { type: "increment" };
    dispatch(action);
  };

  const setStep = ({ target: { value } }) => {
    const action = { type: "setStep", payload: Number(value) };
    dispatch(action);
  };

  return (
    <div>
      <button onClick={dec}>-</button>
      {count}
      <button onClick={inc}>+</button>
      <div>
        <input type="number" value={step} onChange={setStep} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
} // { count: 0, step: 1,} => Counter({count, state})

const withAccessToStore = connect(mapStateToProps); // HOC

export default withAccessToStore(Counter);

// HOC - function(Component1) => Component2
