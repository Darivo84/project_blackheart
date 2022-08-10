import { Routes, Route} from 'react-router-dom'
import { Home ,SignUp, Login } from './pages'
// import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    <div>
      {/* <PersonIcon /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App