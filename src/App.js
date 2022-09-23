import React from 'react'
import { ToastContainer } from 'react-toastify'

// component
import ConfirmationDialog from './components/ConfirmationDialog';
import Loader from './components/Loader';

// all routes
import Routes from './routes/Routes';

// For Default import Theme.scss
import './assets/scss/Theme.scss';

const App = () => {
    return (
        <>
            <Routes />
            <ConfirmationDialog />
            <Loader />
            <ToastContainer
                autoClose={5000}
                closeOnClick={true}
                pauseOnHover={true}
                theme='colored'
                enableHtml={true}
            />
        </>
    )
}

export default App