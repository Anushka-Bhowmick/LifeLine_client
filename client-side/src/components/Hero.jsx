import { useState } from 'react';
import './Hero.css';
import { signInWithGoogle } from '../firebase';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChatButtonClick = () => {
    // Handle the navigation to the chatbot or any desired action
    console.log('Navigate to chatbot');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='respon'>
      <section className="hero-container">
        <div className="hero-images">
          <img src="https://www.cpsmumbai.org/Uploads/2762023161833920.png" alt="Image 2" className="hero-image" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">Welcome to LifeLine</h1>
          <p className="hero-description">Empowering Life, One Drop at a Time – Your Beacon of Hope in Blood Donation.</p>
          <button onClick={signInWithGoogle} className='hero-btn secondary-btn'>Sign in with Google</button>
          <button onClick={signInWithGoogle} className='alt'></button>
        </div>


        
      </section>
    </div>
  );
};

export default Hero;
