import Logo from '../../assets/logo.svg';
import './Header.css';


const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="gymshark logo"/>
    </nav>
  )
}

export default Header;