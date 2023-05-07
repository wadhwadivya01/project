import React ,{useState , useEffect} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './index.css'


const NavLinks = () => {

    const [showNav, setShowNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
      };  

      useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
      });
    
      const toggleNav = () => {
        setShowNav(!showNav);
      };

    return (
        <>
        <div className='header'>
          <div className='navbar'>
            <h1 id='logo'>Divya</h1>
            {width > 1050 ? (
              <ul id='nav'>
                <li>
                  <NavLink className='navlink' to='/home'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navlink' to='/about'>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navlink' to='/whatIDo'>
                    What I do?
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navlink' to='/skills'>
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navlink' to='/experience'>
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navlink' to='/contact'>
                    Contact
                  </NavLink>
                </li>
              </ul>
            ) : (
              <>
                <div className='hamburger' onClick={toggleNav}>
                  <div className='line'></div>
                  <div className='line'></div>
                  <div className='line'></div>
                </div>
                <ul id='nav' className={showNav ? 'nav-active' : ''}>
                  <li>
                    <NavLink className='navlink' to='/home'>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='navlink' to='/about'>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='navlink' to='/whatIDo'>
                      What I do?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='navlink' to='/skills'>
                      Skills
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='navlink' to='/experience'>
                      Experience
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='navlink' to='/contact'>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <Outlet />
        </>
    )
}

export default NavLinks