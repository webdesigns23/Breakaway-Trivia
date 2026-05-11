import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

export default function NavBar() {
  
	return (
    <>    
    <nav className="navbar">      		
      <ul className="nav-links"> 
        <p>Stanley Cup Playoffs 2026 Edition</p>
        <NavLink to="/">
          <img className='logo-name' src="src/assets/logo8.PNG" alt="hockey player"/>  
        </NavLink>
        <NavLink to="/trivia_game">Play</NavLink>
        <NavLink to="/score">Scores</NavLink>
      </ul>
    </nav>    
    </>
  );
}