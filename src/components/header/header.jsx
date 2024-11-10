import './header.scss'
import logo from '/logo.svg'
import { Link } from 'react-router-dom'
import logoText from '/logo-text.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo-img" />
          <img src={logoText} alt="logo-text" className="header__logo-text" />
        </Link>
        
      </div>
      <nav className='header__navbar'>
          <ul className="header__navbar-list">
            <li className="navbar__list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__list-item">
              <Link to="/popular">Popular</Link>
            </li>
            <li className="navbar__list-item">
              <Link to="/tranding">Tranding</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header