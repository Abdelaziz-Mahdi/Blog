import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import AppRoutes from './components/AppRoutes'

function App() {

  return (
    <Router>
      <div className='start'>
        <h1>React on Rails Blog</h1>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
