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
        <button>
          <FiHeart className="nav-icons hrt" />
        </button>
        <button>
          <AiOutlineShoppingCart className="nav-icons cart" />
        </button>
        <button>
          <AiOutlineUserAdd className="nav-icons file" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;