import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';


function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div>

      </div>
      <h1>count is: {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(4))}>
          Increment by 4
        </button>
      </div>
    </>
  )
}

export default App
