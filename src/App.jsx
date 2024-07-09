import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increment, incrementByAmount, decrement } from './store/slices/counter';

function App() {

  const { counter } = useSelector( ( state ) => state.counter );
  const dispatch = useDispatch();


  return (
    <div className="container">
      <h1>Count is { counter }</h1>

      <div>
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementByAmount( 2 ) ) }>
          Increment by 2
        </button>
      </div>

    </div>
  );
}

export default App;
