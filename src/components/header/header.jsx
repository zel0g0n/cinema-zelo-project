import './header.scss'
import logo from '/logo.svg'
import logoText from '/logo-text.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <a href="#">
          <img src={logo} alt="logo" className="header__logo-img" />
          <img src={logoText} alt="logo-text" className="header__logo-text" />
        </a>
        
      </div>
      <nav className='header__navbar'>
          <ul className="header__navbar-list">
            <li className="navbar__list-item">
              <a href="#">Home</a>
            </li>
            <li className="navbar__list-item">
              <a href="#">TV Shows</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header