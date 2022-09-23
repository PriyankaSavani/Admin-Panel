// icons
import { AiOutlineHome, AiOutlineSetting, AiOutlineInbox, AiOutlineForm } from 'react-icons/ai';

export const MENU_ITEMS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        icon: <AiOutlineHome />,
        badge: { variant: 'primary', text: '2+' },
        url: '/dashboard',
    },
    {
        key: 'settings',
        label: 'Settings',
        icon: <AiOutlineSetting />,
        url: '/settings',
        children: [
            {
                key: 'users',
                label: 'Users',
                url: '/settings/users',
            },
            {
                key: 'posts',
                label: 'Posts',
                url: '/settings/posts',
            }
        ]
    },
    {
        key: 'baseUI',
        label: 'Base UI',
        icon: <AiOutlineInbox />,
        url: '/baseUI',
        children: [
            {
                key: 'buttons',
                label: 'Buttons',
                url: '/baseUI/buttons',
            }
        ]
    },
    {
        key: 'forms',
        label: 'Forms',
        icon: <AiOutlineForm />,
        url: '/forms',
        children: [
            {
                key: 'basicElements',
                label: 'Basic Elements',
                url: '/forms/basicElements',
            }
        ]
    }
]