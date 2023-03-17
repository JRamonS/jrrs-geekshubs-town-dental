import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/userSlice.js';

export default configureStore({
    reducer: {
        user: userSlice,
    }
    
});