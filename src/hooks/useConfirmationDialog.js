// actions
import { dialogConfig, handleDialog } from '../redux/actions';

// hooks
import useRedux from './useRedux';

export default function useConfirmationDialog() {
    const { dispatch } = useRedux()

    const openDialog = (options) => {
        dispatch(handleDialog())
        dispatch(dialogConfig(options))
    }

    const getConfirmation = ({ ...options }) =>
        new Promise((res) => {
            openDialog({ actionCallback: res, ...options });
        });

    return { getConfirmation };
}