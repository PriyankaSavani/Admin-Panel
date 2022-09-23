import { useDispatch, useSelector } from 'react-redux';

const useRedux = () => {
    const dispatch = useDispatch();
    const selector = useSelector;
    return { dispatch, selector };
};

export default useRedux;