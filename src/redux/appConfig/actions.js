import { appActions } from './constant';

// chnage page title
const changePageTitle = (pageTitle) => ({
    type: appActions.CHANGE_PAGETITLE,
    payload: pageTitle,
})

// handle dialog
const handleDialog = (dialog) => ({
    type: appActions.HANDLE_DIALOG,
    payload: dialog
})

// dialog config
const dialogConfig = (config) => ({
    type: appActions.DIALOG_CONFIG,
    payload: config
})

// handle loader
const handleLoader = (loader) => ({
    type: appActions.HANDLE_LOADER,
    payload: loader
})

export { changePageTitle, handleDialog, dialogConfig, handleLoader }