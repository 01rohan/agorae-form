import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const Header = (props) => {
  return (
    <div className="container">
      <Navbar>
        <h3 style={{ textAlign: "center" }}>Drag and Drop Form</h3>
        {/* <NavbarBrand style={{textAlign:'center'}}> <img src="" />Drag and Drop Form</NavbarBrand> */}
        {/* <Nav>
        <NavItem>
          <NavLink className="navlink" href="#"><span className="far fa-user icon"></span>My Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#"><span className="fas fa-coins icon"></span> My Balance</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#"><span className="far fa-comments icon"></span>Messages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#"><span className="fas fa-ticket-alt icon"></span>Issue</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#"><span className="fa fa-cog icon"></span>Settings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#"><span className="fa fa-power-off icon"></span>Logout</NavLink>
        </NavItem>
      </Nav> */}
      </Navbar>
    </div>
  );
};

export default Header;
