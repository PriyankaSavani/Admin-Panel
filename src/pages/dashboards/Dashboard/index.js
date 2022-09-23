import React from 'react'

// // hooks
import usePageTitle from '../../../hooks/usePageTitle'

const Dashboard = () => {

    // page title
    usePageTitle({
        title: 'Dashboard'
    })

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard