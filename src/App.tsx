import './App.css'
import Avatar from './components/Avatar';
import avatar from './assets/avatar.jpeg'

function App() {
  return (
    <div className="App">
      <Avatar size="lg" url={avatar} />
    </div>
  )
}

export default App
