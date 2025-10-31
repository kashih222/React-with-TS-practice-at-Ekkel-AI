
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <>
      <div className='h-screen w-full flex items-center justify-center gap-10'>
        <Login/>
        <Profile/>
      </div>
    </>
  )
}

export default App
