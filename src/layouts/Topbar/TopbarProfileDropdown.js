import classNames from 'classnames';
import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

// icons
import { BsChevronDown } from 'react-icons/bs';

// hooks
import useToggle from '../../hooks/useToggle';

// data
import { PROFILE_MENUS } from './data';

const TopbarProfileDropdown = ({ userImage, username }) => {
    const [isOpen, toggle] = useToggle();

    return (
        <Dropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle
                className='nav-link nav-user me-0 waves-effect waves-light'
                id='page-header-user-dropdown'
                onClick={toggle}
                tag='a'
            >
                <img src={userImage} alt='user' className='rounded-circle' />
                <span className='pro-user-name ms-1'>
                    {username} <BsChevronDown />
                </span>
            </DropdownToggle>

            <DropdownMenu end className='profile-dropdown'>
                <div onClick={toggle}>
                    <DropdownItem className='noti-title'>
                        <h6 className='text-overflow m-0'>Welcome !</h6>
                    </DropdownItem>

                    {(PROFILE_MENUS || []).map((menu, i) => {
                        return (
                            <React.Fragment key={i + '-menu'}>
                                {i === PROFILE_MENUS.length - 1 && <DropdownItem divider />}
                                <Link
                                    to={menu.redirectTo}
                                    className='dropdown-item notify-item'
                                    key={i + '-profile-menu'}
                                >
                                    <i className={classNames(menu.icon, 'me-1')}></i>
                                    <span>{menu.label}</span>
                                </Link>
                            </React.Fragment>
                        );
                    })}
                </div>
            </DropdownMenu>
        </Dropdown>
    )
}

export default TopbarProfileDropdown