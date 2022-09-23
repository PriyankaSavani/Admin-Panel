import React from 'react'
import { Button } from 'reactstrap'

const ButtonDisabled = () => {
    return (
        <>
            <h4 className='header-title'>Button Disabled</h4>
            <div className='button-list'>
                <Button color='primary' disabled>Primary</Button>
                <Button color='success' disabled>Success</Button>
                <Button color='info' disabled>Info</Button>
                <Button color='warning' disabled>Warning</Button>
                <Button color='danger' disabled>Danger</Button>
            </div>
        </>
    )
}

export default ButtonDisabled