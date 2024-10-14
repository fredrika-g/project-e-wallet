import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();

  let path = location.pathname;

  return (
    <header>
      <div className="siteHeading">E-Wallet</div>
      <nav className="headerNav">
        {path !== "/addcard" && (
          <Link to="/addcard">
            <button>New Card</button>
          </Link>
        )}

        {path !== "/" && (
          <Link to="/">
            <button>
              <i className="fa-solid fa-house"></i> Go Back
            </button>
          </Link>
        )}
        {path !== "/settings" && (
          <Link to="/settings">
            <button>
              <i className="fa-solid fa-gear"></i>
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
