import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from "gatsby-link";
import styled from 'styled-components'
import { slide as SideMenu } from 'react-burger-menu';

const Nav = styled.div`
  position: fixed;
  z-index: 100;
  background: ${props => props.theme.colors.white};
  width: 100vw;
  height: 70px;
  a {
    text-decoration:none;
  }
    a img {
      height: 20px;
      width: auto;
      margin: 0 auto;
    }
    img {
      height: 20px;
      margin: 0;
      vertical-align: top;
    }
`;

const BurgerMenuWrapper = styled.i`
  display: none;
`;

const MenuMobile = styled(SideMenu)`
  background-color: ${props => props.theme.colors.blue};
  ul {
  display: flex;
  justify-content: space-between;
}
li {
  display: block;
  margin-left: 1em;
  padding: .5rem 0rem;
}
a {
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  transition: all .2s;
  &:hover {
    color: ${props => props.theme.colors.white};
  }
  .bm-item-list a {
    color: ${props => props.theme.colors.white};
    padding: 1rem 2rem;
    text-decoration: none;
  }
`;

const showSettings = (evt) => {
  evt.preventDefault();
}

const activeLinkStyle = {
  color: 'white',
  borderBottom: '2px solid white'
};

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '25px',
    height: '25px',
    left: '25px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#ffffff',
    height: '5px'
  },
  bmCrossButton: {
    height: '25px',
    width: '25px',
    top: '25px',
    right: '25px'
  },
  bmCross: {
    background: '#ffffff'
  },
  bmMenu: {
    background: '#061930',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#ffffff'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Menu = () => {
  return (
    <Nav>
    <MenuMobile styles={ styles } width={"100%"} isOpen={ false }>
         <ul>
           <li><Link to="/" exact activeStyle={activeLinkStyle}>Surf Air</Link></li>
           <li><Link to="HHR" activeStyle={activeLinkStyle}>HHR</Link></li>
           <li><Link to="BUR" activeStyle={activeLinkStyle}>BUR</Link></li>
           <li><Link to="SBA" activeStyle={activeLinkStyle}>SBA</Link></li>
           <li><Link to="SQL" activeStyle={activeLinkStyle}>SQL</Link></li>
         </ul>
    </MenuMobile>
    <a href="/">
  <img src={withPrefix("./logos/fbo_logo.png")} />
</a>
    </Nav>
  )
}

export default Menu