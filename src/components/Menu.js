import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import { slide as SideMenu } from 'react-burger-menu'

const Nav = styled.div`
  position: fixed;
  z-index: 100;
  background: ${props => props.theme.colors.white};
  width: 100vw;
  height: 70px;
  a {
    text-decoration: none;
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
`

const MenuMobile = styled(SideMenu)`
  background-color: ${props => props.theme.colors.blue};
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    display: block;
    margin: 1em;
    padding: .5rem;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-weight: 400;
    transition: all 0.2s;
  }
  &:hover {
    color: ${props => props.theme.colors.white};
    box-shadow: -1px 0 0 0 red;
  }
  .bm-item-list a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    padding: 1rem;
    &:hover {
      color: ${props => props.theme.colors.white};
      box-shadow: -1px 0 0 0 red;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
  boxShadow: '-2px 0 0 0 red',
  fontWeight: 'bold',
}

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '25px',
    height: '25px',
    left: '25px',
    top: '25px',
  },
  bmBurgerBars: {
    background: '#ffffff',
    height: '5px',
  },
  bmCrossButton: {
    height: '25px',
    width: '25px',
    top: '25px',
    right: '25px',
  },
  bmCross: {
    background: '#ffffff',
  },
  bmMenu: {
    background: '#061930',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#ffffff',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const Menu = () => {
  return (
    <Nav>
      <MenuMobile styles={styles} width={'100%'} isOpen={false}>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Surf Air
            </Link>
          </li>
          <li>
            <Link to="hhr" activeStyle={activeLinkStyle}>
              Hawthorne
            </Link>
          </li>
          <li>
            <Link to="bur" activeStyle={activeLinkStyle}>
              Burbank
            </Link>
          </li>
          <li>
            <Link to="sba" activeStyle={activeLinkStyle}>
              Santa Barbara
            </Link>
          </li>
          <li>
            <Link to="sql" activeStyle={activeLinkStyle}>
              San Carlos
            </Link>
          </li>
          <li>
            <Link to="trk" activeStyle={activeLinkStyle}>
              Truckee / Lake Tahoe
            </Link>
          </li>
          <li>
            <Link to="Houston" activeStyle={activeLinkStyle}>
              Houston
            </Link>
          </li>
          <li>
            <Link to="Dallas" activeStyle={activeLinkStyle}>
              Dallas
            </Link>
          </li>
          <li>
            <Link to="Austin" activeStyle={activeLinkStyle}>
              Austin
            </Link>
          </li>
          <li>
            <Link to="Midland" activeStyle={activeLinkStyle}>
              Midland
            </Link>
          </li>
        </ul>
      </MenuMobile>
      <a href="/">
        <img src={withPrefix('./logos/fbo_logo.png')} />
      </a>
    </Nav>
  )
}

export default Menu
