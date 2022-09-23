import React from 'react'
import { Button } from 'reactstrap'

const ButtonSize = () => {
    return (
        <>
            <h4 className='header-title'>Button Size</h4>
            <div className='button-list'>
                <Button color='primary' className='btn-xs'>Extra Small</Button>
                <Button color='success' size='sm'>Small</Button>
                <Button color='info' size='md'>Normal</Button>
                <Button color='warning' size='lg'>Large</Button>
            </div>
        </>
    )
}

export default ButtonSize