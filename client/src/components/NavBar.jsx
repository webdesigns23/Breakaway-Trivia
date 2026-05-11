import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

export default function NavBar() {
  
	return (
    <>    
    <nav className="navbar">      		
      <ul className="nav-links"> 
           
        <NavLink to="/">
          <img className='logo' src="src/assets/logo1.png" alt="hockey player"/>  
        </NavLink>
        <NavLink to="/trivia_game">Play</NavLink>
        <NavLink to="/score">Scores</NavLink>
      </ul>
    </nav>    
    </>
  );
}