import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import classNames from 'classnames';

// data
import { MENU_ITEMS } from './data';

const MenuItemLink = ({ item, className }) => {
    return (
        <Link
            to={item.url}
            target={item.target}
            className={
                classNames(
                    'side-nav-link-ref',
                    'side-sub-nav-link',
                    className
                )
            }
        >
            {item.icon && item.icon}
            {item.badge && (
                <span className={
                    classNames(
                        'badge',
                        'bg-' + item.badge.variant,
                        'rounded-pill',
                        'float-end'
                    )
                }>
                    {item.badge.text}
                </span>
            )}
            <span>{item.label}</span>
        </Link>
    );
};

const MenuItem = ({ item, className, linkClassName }) => {
    return (
        <li className={
            classNames(
                'side-nav-item',
                className
            )
        }>
            <MenuItemLink
                item={item}
                className={linkClassName}
            />
        </li>
    );
};

const MenuItemWithChildren = ({ item, linkClassName, subMenuClassNames, activeMenuItems, toggleMenu }) => {
    const [open, setOpen] = useState()

    useEffect(() => {
        setOpen(activeMenuItems.includes(item.key))
    }, [activeMenuItems, item.key])

    const toggleMenuItem = (e) => {
        e.preventDefault();
        const status = !open
        setOpen(status)
        if (toggleMenu) toggleMenu(item, status)
        return false
    }

    return (
        <li className={
            classNames(
                'side-nav-item',
                { 'menuitem-active': open }
            )
        }>
            <Link
                to='#'
                onClick={toggleMenuItem}
                data-menu-key={item.key}
                aria-expanded={open}
                className={
                    classNames(
                        'has-arrow',
                        'side-sub-nav-link',
                        linkClassName,
                        { 'menuitem-active': activeMenuItems.includes(item.key) ? 'active' : '' }
                    )
                }
            >
                {item.icon && item.icon}
                {!item.badge ? (
                    <span className='menu-arrow'></span>
                ) : (
                    <span className={
                        classNames(
                            'badge',
                            'bg-' + item.badge.variant,
                            'rounded-pill',
                            'float-end'
                        )
                    }>
                        {item.badge.text}
                    </span>
                )}
                <span> {item.label} </span>
            </Link>
            <Collapse isOpen={open}>
                <div>
                    <ul className={classNames(subMenuClassNames)}>
                        {(item.children || []).map((child, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {child.children ? (
                                        <>
                                            {/* parent */}
                                            <MenuItemWithChildren
                                                item={child}
                                                linkClassName={activeMenuItems.includes(child.key) ? 'active' : ''}
                                                activeMenuItems={activeMenuItems}
                                                subMenuClassNames='side-nav-third-level'
                                                toggleMenu={toggleMenu}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            {/* child */}
                                            <MenuItem
                                                item={child}
                                                className={activeMenuItems.includes(child.key) ? 'menuitem-active' : ''}
                                                linkClassName={activeMenuItems.includes(child.key) ? 'active' : ''}
                                            />
                                        </>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </ul>
                </div>
            </Collapse>
        </li>
    );
};

const Menu = () => {

    const [activeMenuItems, setActiveMenuItems] = useState([])

    let location = useLocation()

    useEffect(() => {
        let url = location.pathname
        setActiveMenuItems(url.toString().split('/').slice(1))
    }, [location])

    const toggleMenu = (MENU_ITEMS, show) => {
        if (show) setActiveMenuItems(MENU_ITEMS.url.toString().split('/').slice(1))
    }

    return (
        <>
            <ul className='side-menu' id='side-menu'>
                {(MENU_ITEMS || []).map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {item.isTitle ? (
                                <li
                                    className={classNames('menu-title', {
                                        'mt-2': index !== 0,
                                    })}
                                >
                                    {item.label}
                                </li>
                            ) : (
                                <>
                                    {item.children ? (
                                        <MenuItemWithChildren
                                            item={item}
                                            toggleMenu={toggleMenu}
                                            subMenuClassNames='nav-second-level'
                                            activeMenuItems={activeMenuItems}
                                            linkClassName='side-nav-link'
                                        />
                                    ) : (
                                        <MenuItem
                                            item={item}
                                            linkClassName='side-nav-link'
                                            className={activeMenuItems.includes(item.key) ? 'menuitem-active' : ''}
                                        />
                                    )}
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </>
    );
};

export default Menu;
