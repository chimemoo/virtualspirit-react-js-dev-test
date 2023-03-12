import './App.css'
import AvatarGroup from './components/AvatarGroup';
import { userList } from './constants';

function App() {
  return (
    <div className="App">
      <AvatarGroup
        userList={userList}
        maxLength={5}
        size="xs"
      />
    </div>
  )
}

export default App
