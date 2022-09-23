import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from '.'

const loading = () => <div className=''></div>;

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={loading()}>
                <AllRoutes />
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes