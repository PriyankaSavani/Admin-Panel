import React, { useEffect } from 'react'

// components
import Scrollbar from '../../components/Scrollbar'
import Menu from './Menu'

const LeftsideBar = () => {

    useEffect(() => {

        const LeftsideBarSize = () => {
            let size = window.innerWidth
            if (size <= 768 && size > 576) {
                document.body.classList.add('left_sidebar_condensed')
            } else {
                document.body.classList.remove('left_sidebar_condensed')
            }
        }

        window.addEventListener('load', LeftsideBarSize)
        window.addEventListener('resize', LeftsideBarSize)
    }, [])

    return (
        <div className='left-side-menu'>
            <Scrollbar style={{ maxHeight: '100%' }}>
                <div id='sidebar-menu'>
                    <Menu />
                </div>
            </Scrollbar>
        </div>
    )
}

export default LeftsideBar