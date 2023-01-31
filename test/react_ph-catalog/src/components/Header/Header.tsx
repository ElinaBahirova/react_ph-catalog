import classNames from 'classnames';
import { FC } from 'react';
// import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Header: FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="header__nav nav">
        <NavLink to="/" className="header__logo" />
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/phones" className="nav__link">
              Phones
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/tablets" className="nav__link">
              Tablets
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/accessories" className="nav__link">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='header__saved saved'>
        <NavLink to="/favorites" className="header__saved-link">
          <div className={classNames('header__icon',' header__icon--favorites', {
                'header__icon--favorites-active': location.pathname === '/favorites',
              })}></div>
        </NavLink>
        <NavLink to="/cart" className="header__saved-link">
        <div className="header__icon header__icon--cart"></div>
        </NavLink>
      </div>
    </header>
  );
};
