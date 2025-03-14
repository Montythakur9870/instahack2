import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to manage whether the nav is open or closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle function to update the state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="container">
        <nav
          id="navbar"
          className="nav-sticky fixed-top navbar-custom sticky sticky-dark align-items-center navbar navbar-expand-lg"
        >
          <div className="container">
            <a className="logo me-3" href="/">
              <img
                src="data:image/png;base64,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"
                alt=""
                height="26"
              />
            </a>
            <button
              aria-label="Toggle navigation"
              type="button"
              className="navbar-toggler"
              onClick={toggleNav}
            >
              <span className="ti-menu"></span>
            </button>
            <div
              id="navbarCollapse"
              className={`navbar-collapse collapse navbarmargin ${isNavOpen ? 'show' : ''}`}
            >
              <div data-nav="list" className="navbar-collapse">
                <ul id="navbar-navlist" className="navbar-nav navbar-center nav">
                  <li className="active nav-item">
                    <Link to="/" className="active nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item getFollowers">
                    <Link to="/insta-followers" className="nav-link">
                      Free Followers
                    </Link>
                  </li>
                  <li className="nav-item getLikes">
                    <Link to="/insta-likes" className="nav-link">
                      Free Likes
                    </Link>
                  </li>
                </ul>
                <ul className="list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0">
                  <li className="list-inline-item ml-0">
                    <a className="menu-social-link" href="/">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook icon-xs sw_1-5"
                      >
                        <g>
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                  {/* Add additional social icons here */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
