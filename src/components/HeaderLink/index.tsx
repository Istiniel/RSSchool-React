import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './headerlink.module.scss';

export type HeaderLinkType = {
  link: string;
  title: string;
};

const HeaderLink: React.FC<HeaderLinkType> = ({ link, title }) => {
  return (
    <li className={st.navItem}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? st.navLink + ' ' + st.active : st.navLink)}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
