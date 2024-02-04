import './App.css'
import Chatbot from './components/Chatbot'
import Header from './components/Header'
import Hero from './components/Hero'
import { signInWithGoogle } from "./firebase"
function App() {

  return (
    <>
    
    <Header/>
    <div>
    <button onClick = {signInWithGoogle}>Sign In With Google</button>
    </div>
    <Hero/>
      <Chatbot/>
    </>
  )
}

export default App
