import { configureStore } from '@reduxjs/toolkit';
import participantsReducer from './participantsSlice';

export default configureStore({
  reducer: {
    participants: participantsReducer,
  },
});
