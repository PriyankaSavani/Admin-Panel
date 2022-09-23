import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

// icons
import { FiMenu } from 'react-icons/fi'

// hooks
import useRedux from '../../hooks/useRedux';

// components
import TopbarProfileDropdown from './TopbarProfileDropdown';

// images
import logoSm from '../../assets/images/logo-sm.png';
import avatar1 from '../../assets/images/users/user-1.jpg';
import logoLight from '../../assets/images/logo-light.png';

const Topbar = ({ openLeftMenuCallBack }) => {

    const { selector } = useRedux();

    const [isopen, setIsopen] = useState(false);

    const { pageTitle } = selector((state) => ({
        pageTitle: state.AppConfig.pageTitle
    }))

    const handleLeftMenuCallBack = () => {
        setIsopen(!isopen);
        if (openLeftMenuCallBack) openLeftMenuCallBack();
    };

    return (
        <div className='navbar-custom'>
            <ul className='list-unstyled topnav-menu float-end mb-0'>
                <li className='dropdown notification-list topbar-dropdown cursor-pointer'>
                    <TopbarProfileDropdown userImage={avatar1} username={'Nowak'} />
                </li>
            </ul>

            {/* logo */}
            <div className='logo-box'>
                <Link to='/' className='logo logo-dark text-center'>
                    <span className='logo-sm'>
                        <img src={logoSm} alt='logo-sm' height='22' />
                    </span>
                    <span className='logo-lg'>
                        <img src={logoLight} alt='logo-dark' height='16' />
                    </span>
                </Link>
            </div>

            <ul className='list-unstyled topnav-menu topnav-menu-left mb-0'>
                <li onClick={handleLeftMenuCallBack}>
                    <Button className='button-menu-mobile disable-btn waves-effect'>
                        <FiMenu />
                    </Button>
                </li>
                <li>
                    <h4 className='page-title-main'>{pageTitle.title}</h4>
                </li>
            </ul>
        </div>
    )
}

export default Topbar