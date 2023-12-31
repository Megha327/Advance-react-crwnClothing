import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.style.scss';

const NavigationBar = () => {
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">    
                <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/signin">SignIn</Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
}
  
export default NavigationBar; 