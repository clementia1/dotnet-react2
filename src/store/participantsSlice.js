import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    firstname: "Robinson",
    lastname: "Lloyd",
    id: "NlzsCzmEbn",
    time: "140",
}, {
    firstname: "Eugenia",
    lastname: "Barton",
    id: "cVCiQeEWR0",
    time: "121",
}, {
    firstname: "Elnora",
    lastname: "Coffey",
    id: "GULjQqsmnp",
    time: "84",
}, {
    firstname: "Garrett",
    lastname: "Bryant",
    id: "2EziriaCxF",
    time: "94",
}];

const participantsSlice = createSlice({
    name: 'participants',
    initialState,
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
export default participantsSlice.reducer;
