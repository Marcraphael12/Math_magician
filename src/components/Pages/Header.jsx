import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <div className="Header">
    <h1>Math Magicians</h1>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/calculator">Calculator</Link>
        </li>

        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
