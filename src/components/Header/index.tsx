import React from 'react';
import Location from '../Location';
import Logo from '../Logo';
import st from './header.module.scss';
import { Outlet } from 'react-router-dom';
import ComponentWithLocation from '../ComponentWithLocation';
import HeaderLink, { HeaderLinkType } from '../HeaderLink';

const Header: React.FC = () => {
  const CurrentLocation = ComponentWithLocation(Location);

  const headerLinks: HeaderLinkType[] = [
    { link: 'about', title: 'About Us' },
    { link: 'sign', title: 'Sign Up' },
    { link: 'prices', title: 'Prices' },
  ];

  return (
    <>
      <header className={st.header}>
        <div className="wrapper">
          <nav className={st.nav}>
            <Logo title="Slider" />
            <CurrentLocation />
            <ul className={st.navList}>
              {headerLinks.map((linkProps) => (
                <HeaderLink {...linkProps} key={linkProps.link} />
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
