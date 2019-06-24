import React, { useState } from 'react';

import NavItem from './NavItem/NavItem';
import './Nav.scss';

const navItems = [
    'Catégorie',
    'Region',
    'Qualité',
    'Caractéristique',
    'Recommandation',
    'Gustative',
    'Disponibilité'
];
const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [currentNav, setCurrentNav] = useState('');

    const onNavHover = (nav: string) => {
        setShowMenu(true);
        setCurrentNav(nav);
    };

    const onNavLeave = () => {
        setShowMenu(false);
        setCurrentNav('');
    };

    return (
        <nav onMouseLeave={onNavLeave}>
            <div className='nav'>
                {navItems.map(nav => (
                    <NavItem
                        key={nav}
                        name={nav}
                        onMouseEnter={() => onNavHover(nav)}
                        isSelected={nav === currentNav}
                    />
                ))}
            </div>
            <div className={`nav-menu ${showMenu ? '' : 'hidden'}`}>
                {currentNav}
            </div>
        </nav>
    );
};

export default Nav;
