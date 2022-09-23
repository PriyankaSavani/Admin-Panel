import { useCallback } from 'react';

// actions
import { handleLoader } from '../redux/actions';

// hooks
import useRedux from './useRedux';

export default function useLoader() {
    const { dispatch } = useRedux()

    const loader = useCallback((initialState) => {
        dispatch(handleLoader(initialState))
    }, [dispatch])

    return { loader }
}