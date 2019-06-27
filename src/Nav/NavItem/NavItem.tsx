import React from 'react';
import './NavItem.scss';

type navItemProps = {
    name: string;
    onMouseEnter: () => void;
    isSelected: boolean;
};

const NavItem = (props: navItemProps) => (
    <div className='nav-bar'>
        <div
            className={`nav-bar__item ${props.isSelected ? 'selected' : ''}`}
            onMouseEnter={props.onMouseEnter}>
            {props.name}
        </div>
    </div>
);

export default NavItem;
