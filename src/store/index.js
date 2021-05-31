import { configureStore } from '@reduxjs/toolkit';
import participantsReducer from './participantsSlice';
import competitionsReducer from './competitionsSlice';

export default configureStore({
  reducer: {
    participants: participantsReducer,
    competitions: competitionsReducer,
  },
});
