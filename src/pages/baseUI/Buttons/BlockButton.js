import React from 'react'
import { Button } from 'reactstrap'

const BlockButton = () => {
    return (
        <>
            <h4 className='header-title mt-3'>Block Buttons</h4>
            <div className='button-list d-grid'>
                <Button color='primary' size='lg'>
                    Block Button
                </Button>
                <Button color='success'>
                    Block Button
                </Button>
                <Button color='info' size='sm'>
                    Block Button
                </Button>
            </div >
        </>
    )
}

export default BlockButton