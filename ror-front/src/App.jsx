import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import AppRoutes from './components/AppRoutes'

function App() {

  return (
    <Router>
      <NavBar />
      <div className='start'>
        <h1>React on Rails</h1>
        <p>find this app</p>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
