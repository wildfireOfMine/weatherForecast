import { useTranslation } from "react-i18next";
import {Link, NavLink} from "react-router-dom"

/************************************************************************************************** */

export const Navbar = () => {
  const { i18n, t } = useTranslation();
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
                {t('home')}
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
