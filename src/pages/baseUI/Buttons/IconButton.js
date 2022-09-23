import React from 'react'
import { Button } from 'reactstrap'
import { BsCheck2All, BsCurrencyDollar, BsFillHeartFill, BsFillInfoCircleFill } from 'react-icons/bs'
import { AiFillWarning, AiOutlineCloud, AiOutlineMail } from 'react-icons/ai'
import { MdDangerous } from 'react-icons/md'

const IconButton = () => {
    return (
        <>
            <h4 className='header-title'>Icon Buttons</h4>
            <div className='button-list'>
                <Button color='primary'>
                    <BsFillHeartFill />
                </Button>
                <Button color='success'>
                    <BsCheck2All />
                </Button>
                <Button color='info' >
                    <BsFillInfoCircleFill />
                </Button >
                <Button color='warning' >
                    <AiFillWarning />
                </Button >
                <Button color='danger' >
                    <MdDangerous />
                </Button >
            </div >
            <br />
            <div className='button-list'>
                <Button color='primary'>
                    <BsFillHeartFill className='me-1' />Like
                </Button>
                <Button color='success'>
                    <AiOutlineMail className='me-1' />Share
                </Button>
                <Button color='info'>
                    <AiOutlineCloud className='me-1' />Cloud Hosting
                </Button>
                <Button color='warning'>
                    Donate<BsCurrencyDollar className='ms-1' />
                </Button>
            </div>
        </>
    )
}

export default IconButton