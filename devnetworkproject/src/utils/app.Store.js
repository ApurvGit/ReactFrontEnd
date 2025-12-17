import { configureStore } from '@reduxjs/toolkit'
import useReducer from './userSlice';
import feedReducer from './feedSlice';
import connctionReducer from './connectionsSlice';
import requestReducer from './requestsSlice'
const appStore = configureStore({
    reducer: {
        user: useReducer,
        feed: feedReducer,
        connections: connctionReducer,
        requests: requestReducer
    }
});
export default appStore;