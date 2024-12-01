import './App.css'
// import CounterControls from './components/CounterControls'
import CounterDisplay from './components/CounterDisplay'
import { CounterContextProvider } from './CounterContext'

function App() {
  return (
    <div>
      <CounterContextProvider>
        <CounterDisplay />
        {/* <CounterControls /> */}
      </CounterContextProvider>
    </div>
  )
}

export default App