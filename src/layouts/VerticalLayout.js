import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'reactstrap';

// components
import Topbar from './Topbar';
import LeftSidebar from './LeftSidebar';
import Footer from './Footer';

const VerticalLayout = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const openMenu = () => {
        setIsMenuOpened((prevState) => !prevState);

        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    return (
        <div id='wrapper'>
            <Topbar openLeftMenuCallBack={openMenu} />
            <LeftSidebar />
            <div className='content-page'>
                <div className='content'>
                    <Container fluid>
                        <Outlet />
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default VerticalLayout