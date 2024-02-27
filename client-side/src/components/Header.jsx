import logo from '../assets/LIFELINE.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <span className="title">LifeLine</span>
      <div className="hamburger">
          <div className="cont-line">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="fullnavscreen">
            </div>
          </div>
          
      </div>
      
    </div>
  );
};

export default Header;