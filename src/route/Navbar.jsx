import {Link, NavLink} from "react-router-dom"

/************************************************************************************************** */

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                          
              <NavLink 
                  to="/"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
              
              <NavLink 
                  to="/search"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Search
              </NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
