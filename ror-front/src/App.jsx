import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import PostsList from './features/posts/PostsList'

function App() {

  return (
    <Router>
      <NavBar />
      <div className='start'>
        <h1>React on Rails</h1>
        <p>find this app</p>
        <PostsList />
      </div>
    </Router>
  )
}

export default App
