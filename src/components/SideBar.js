import React from 'react';
import styled from "styled-components";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  // position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 80px;     
  // z-index: 1;     
  top: 6.8em;      
  background-color: #FFFFFF; 
  padding-top: 10px;
`;

class SideNav extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activePath: '/',
      items: [
        {
          path: '/',
          name: 'Home',
          css: 'fa fa-home',
          key: 1
        },
        {
          path: '/about',
          name: 'About',
          css: 'far fa-square',
          key: 2
        },
        {
          path: '/NoMatch',
          name: 'NoMatch',
          css: 'far fa-folder',
          key: 3
        },
        {
          path: '/',
          name: 'Home',
          css: 'far fa-dot-circle',
          key: 4
        },
        {
          path: '/about',
          name: 'About',
          css: 'fas fa-clipboard',
          key: 5
        },
        {
          path: '/NoMatch',
          name: 'NoMatch',
          css: 'fas fa-chart-pie',
          key: 6
        },
        {
          path: '/',
          name: 'Home',
          css: 'far fa-calendar',
          key: 7
        },
        {
          path: '/about',
          name: 'About',
          css: 'far fa-file-alt',
          key: 8
        },
        {
          path: '/NoMatch',
          name: 'NoMatch',
          css: 'fas fa-book',
          key: 9
        },
        {
          path: '/',
          name: 'Home',
          css: 'fas fa-download',
          key: 10
        },
        {
          path: '/about',
          name: 'About',
          css: 'fas fa-satellite-dish',
          key: 11
        },
        {
          path: '/NoMatch',
          name: 'NoMatch',
          css: 'fas fa-info',
          key: 12
        },
        {
          path: '/',
          name: 'Home',
          css: 'fas fa-user-friends',
          key: 13
        },
        {
          path: '/about',
          name: 'About',
          css: 'fab fa-telegram-plane',
          key: 14
        },

      ]
    }
  }

  onItemClick = (path) => {
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }

  render() {
    const { items, activePath } = this.state;
    return (
      <div>
        <StyledSideNav>
          <div>
            <img className="profile" src="./assets/profile/profile.jpg" />
          </div>
          {
            /* items = just array AND map() loops thru that array AND item is param of that loop */
            items.map((item) => {
              /* Return however many NavItems in array to be rendered */
              return (
                <div>
                  <div>
                    <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} />
                  </div>
                </div>

              )
            })
          }
        </StyledSideNav>
      </div>

    );
  }

}

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }
  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}



const StyledNavItem = styled.div`
 
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    height: 20px;
    width: 20px; 
    margin-top: 23%;
     
  }
  .fa{
    color: #383838;
  }
  .fas{
    color: #383838;
  }
  .far{
    color: #383838;
  }
  .fab{
    color: #383838;
  }
`;


const NavIcon = styled.div`

`;


export default class Sidebar extends React.Component {
  render() {
    return (
      <div>

        <div className="sides">
          <SideNav></SideNav>
        </div>
      </div>
    );
  }
}