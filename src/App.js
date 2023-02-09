import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();


  function increment() {
    dispatch(actions.increment())

  }

  function decrement() {
    dispatch(actions.decrement())


  }
  function add10() {
    dispatch(actions.add10(10))
  }
  return (
    <div >
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increment}> increment</button>
      <button onClick={decrement}> decrement </button>
      <button onClick={add10}>addBy10 </button>


    </div>
  );
}

export default App;
