import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { search } from 'react-icons-kit/feather/search';
import Logo from 'common/src/components/UIElements/Logo';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import useOnClickOutside from 'common/src/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
import LogoImage from 'common/src/assets/image/appModern/logo.png';
import LogoImageAlt from 'common/src/assets/image/appModern/logo.png';

import { navbar } from 'common/src/data/AppModern';
import Link from 'next/link';
import { MenuItem } from '../Footer/footer.style';

import handleVideoModal from '../Banner';
import { closeModal, openModal } from '@redq/reuse-modal';
import LoginModal from '../LoginModal/index2';

const Navbar = () => {
  const { navMenu } = navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = (event) => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleSearchForm = (event) => {
    event.preventDefault();

    if (state.search !== '') {
      console.log('search data: ', state.search);

      setState({
        ...state,
        search: '',
      });
    } else {
      console.log('Please fill this field.');
    }
  };

  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));

  });

  const CloseModalButton = () => (
    <Button
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol"/>}
    />
  );
   const GotoLoginPage = () => {
     window.location.href="http://localhost:3000/login"
   }
  /*const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '1000px',
          height: '500px',
          x: 0,
          y: 0
        }
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };*/

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/appmodern"
          logoSrc={LogoImage}
          title="App Modern"
          className="main-logo"
        />
        <Logo
          href="/appmodern"
          logoSrc={LogoImageAlt}
          title="App Modern"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          {/* <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler('search')}
            />
          </Search>*/}
          {/* end of search */}
          {/* end of logo 
          <AnchorLink href="#trail" offset={84}>
            <Button className="trail" title="Se connecter" />
          </AnchorLink>*/}
          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
          <Button title="Se connecter" onClick={GotoLoginPage/*handleVideoModal*/} className="btn-se-connecter"/>
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button title="Se connecter" />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
