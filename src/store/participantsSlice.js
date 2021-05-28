import { createSlice } from '@reduxjs/toolkit';

const participantsSlice = createSlice({
    name: 'participants',
    initialState: [],
    reducers: {
        addParticipant: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
        },
        deleteParticipant: {
            reducer: (state, action) => {
                state.filter(item => item.id != action.payload.id)
            },
        },
    }
})

export const { addParticipant, deleteParticipant } = participantsSlice.actions;
export const participants = state => state.participants;
export default participantsSlice.reducer;
