import React from 'react';
import { useRoutes } from 'react-router-dom';

// layouts
import DefaultLayout from '../layouts/DefaultLayout'

// components
import Root from './Root';
import PrivateRoute from './PrivateRoute';

// lazy load all the views
// layout 
const Layout = React.lazy(() => import('../layouts/VerticalLayout'))

// auth
const Signin = React.lazy(() => import('../pages/auth/Signin'))
const LockScreen = React.lazy(() => import('../pages/auth/LockScreen'))
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'))

// dashboards
const Dashboard = React.lazy(() => import('../pages/dashboards/Dashboard'))

// settings
// users
const Users = React.lazy(() => import('../pages/settings/users/Users'))
const UserDetail = React.lazy(() => import('../pages/settings/users/UserDetail'))
const AddUser = React.lazy(() => import('../pages/settings/users/AddUser'))
const EditUser = React.lazy(() => import('../pages/settings/users/EditUser'))
// posts
const Posts = React.lazy(() => import('../pages/settings/posts/Posts'))
const AddPost = React.lazy(() => import('../pages/settings/posts/AddPost'))
const EditPost = React.lazy(() => import('../pages/settings/posts/EditPost'))

// baseUI
const Buttons = React.lazy(() => import('../pages/baseUI/Buttons'))

// forms
const BasicElements = React.lazy(() => import('../pages/forms/BasicElements'))

const AllRoutes = () => {

    return useRoutes([
        { path: '/', element: <Root /> },
        {
            // public routes
            path: '/',
            element: <DefaultLayout />,
            children: [
                { path: 'auth/signin', element: <Signin /> },
                { path: 'auth/lock-screen', element: <LockScreen /> },
                { path: 'auth/forget-password', element: <ForgetPassword /> }
            ]
        },
        {
            // auth protected routes
            path: '/',
            element: <PrivateRoute component={Layout} />,
            children: [
                { path: '/dashboard', element: <Dashboard /> },

                { path: 'settings/users', element: <Users /> },
                { path: 'settings/users/user-detail/:id', element: <UserDetail /> },
                { path: 'settings/users/add-user', element: <AddUser /> },
                { path: 'settings/users/edit-user/:id', element: <EditUser /> },

                { path: 'settings/posts', element: <Posts /> },
                { path: 'settings/posts/add-post', element: <AddPost /> },
                { path: 'settings/posts/edit-post/:id', element: <EditPost /> },

                { path: 'baseUI/buttons', element: <Buttons /> },

                { path: 'forms/basicElements', element: <BasicElements /> }
            ]
        }
    ])
}

export default AllRoutes