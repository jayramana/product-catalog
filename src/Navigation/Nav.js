import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <p className="title">Shopify 🛒</p>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons hrt" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons cart" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons file" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;