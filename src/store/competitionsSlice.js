import { createSlice } from '@reduxjs/toolkit';

const competitionsSlice = createSlice({
    name: 'competitions',
    initialState: [],
    reducers: {
        addCompetition: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
        },
        deleteCompetition: {
            reducer: (state, action) => {
                state.filter(item => item.id != action.payload.id)
            },
        },
    }
})

export const { addCompetition, deleteCompetition } = competitionsSlice.actions;
export default competitionsSlice.reducer;
