import { Routes, Route} from 'react-router-dom'
import { SignUp, Login } from './pages'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
