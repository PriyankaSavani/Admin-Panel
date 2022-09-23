import React from 'react'
import { Button } from 'reactstrap'

const ButtonWidth = () => {
    return (
        <>
            <h4 className='header-title'>Button Width</h4>
            <div className='button-list'>
                <Button color='primary' className='width-xs'>xs</Button>
                <Button color='success' className='width-sm'>Small</Button>
                <Button color='info' className='width-md'>Middle</Button>
                <Button color='warning' className='width-lg'>Large</Button>
                <Button color='danger' className='width-xl'>Extra Large</Button>
            </div>
        </>
    )
}

export default ButtonWidth