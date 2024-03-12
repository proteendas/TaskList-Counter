import '../components/header.css';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/">
      <img className="logo" src={Logo} alt="" />
      </Link>
      <Link to='/'>Task List</Link>
      <Link to='/counter'>Counter</Link>
    </header>
  )
}