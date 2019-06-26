import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NavItem from './NavItem/NavItem';
import { state } from '../shared/types';
import { navItems } from '../shared/navItems';
import * as actionTypes from '../store/actions/actionTypes';
import './Nav.scss';

type navField =
    | 'Catégorie'
    | 'Région'
    | 'Qualité'
    | 'Caractéristique'
    | 'Recommandation'
    | 'Gustative'
    | 'Disponibilité';

const navItemNames = [
    'Catégorie',
    'Région',
    'Qualité',
    'Caractéristique',
    'Recommandation',
    'Gustative',
    'Disponibilité'
] as navField[];

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [currentNav, setCurrentNav] = useState('');
    const dispatch = useDispatch();
    const groupByResults = useSelector(
        (state: state) => state.selection.groupBy
    );

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
                {navItemNames.map(nav => (
                    <NavItem
                        key={nav}
                        name={nav}
                        onMouseEnter={() => onNavHover(nav)}
                        isSelected={nav === currentNav}
                    />
                ))}
            </div>

            <div className={`nav-menu ${showMenu ? '' : 'hidden'}`}>
                {currentNav &&
                    navItems[currentNav as navField].map(category => (
                        <div key={category.field} className='field'>
                            <div className='field__title'>{category.value}</div>
                            <div className='field__items'>
                                {groupByResults
                                    .filter(
                                        group => group.field === category.field
                                    )
                                    .map(group =>
                                        group.values.slice(0, 10).map(value => (
                                            <div
                                                key={value.value}
                                                className='item'
                                                onClick={() =>
                                                    dispatch({
                                                        type:
                                                            actionTypes.ADD_TERM,
                                                        field: group.field,
                                                        value: value.value
                                                    })
                                                }>
                                                {value.value}
                                                <span>
                                                    {value.numberOfResults}
                                                </span>
                                            </div>
                                        ))
                                    )}
                            </div>
                        </div>
                    ))}
            </div>
        </nav>
    );
};

export default Nav;
