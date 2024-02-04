import './App.css'
import Chatbot from './components/Chatbot'
import Header from './components/Header'
import Hero from './components/Hero'
import { signInWithGoogle } from "./firebase"
import '../src/components/Hero.css'
function App() {

  return (
    <>
    
    <Header/>
    <div>
        <button onClick = {signInWithGoogle} className='hero-btn secondary-btn'>Sign it with Google</button>
    </div>
    <Hero/>
      <Chatbot/>
    </>
  )
}

export default App
