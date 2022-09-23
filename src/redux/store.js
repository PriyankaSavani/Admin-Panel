import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import API from '../rest/api';

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: API,
            },
            serializableCheck: false,
        }),
})