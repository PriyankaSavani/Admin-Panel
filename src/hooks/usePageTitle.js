import { useEffect } from 'react';

// actions
import { changePageTitle } from '../redux/actions';

// hooks
import useRedux from './useRedux'

export default function usePageTitle(value) {
    const { dispatch } = useRedux();

    useEffect(() => {
        dispatch(changePageTitle(value));
    }, [dispatch, value]);
}