import { useAppDispatch, useAppSelector } from './app/hooks'
import logo from './logo.svg'
import './App.css'
import { increment } from './features/counter/counterSlice'
import { useFetchDogBreedsQuery } from './features/api/apiSlice';

function App() {
  const count = useAppSelector(state => state.counter.count)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(increment())
  }

  const {data = [], isFetching} = useFetchDogBreedsQuery();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>

        {isFetching ? 
          <p>Loading dogs...</p> 
        :
          <div>  
            <div>
              Number of dogs fetched {data.length}
            </div>
            <ul>
              {data.map(dog => <li>
                <p>{dog.name}</p>
                <img height={100} src={dog.image.url} />
              </li>)}
            </ul>
            </div> 
        }
      </header>
    </div>
  )
}

export default App
