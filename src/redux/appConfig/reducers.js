import { appActions } from './constant';

const INIT_STATE = {
    pageTitle: '',
    isDialogOpen: false,
    dialogConfig: {},
    isLoader: false
}

export const AppConfig = (
    state = INIT_STATE,
    action
) => {
    switch (action.type) {
        case appActions.CHANGE_PAGETITLE:
            return {
                ...state,
                pageTitle: action.payload
            }
        case appActions.HANDLE_DIALOG:
            return {
                ...state,
                isDialogOpen: !state.isDialogOpen
            }
        case appActions.DIALOG_CONFIG:
            return {
                ...state,
                dialogConfig: action.payload
            }
        case appActions.HANDLE_LOADER:
            return {
                ...state,
                isLoader: action.payload
            }
        default:
            return { ...state }
    }
}
