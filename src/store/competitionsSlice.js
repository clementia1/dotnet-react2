import { createSlice } from '@reduxjs/toolkit';

const competitionsSlice = createSlice({
    name: 'competitions',
    initialState: [],
    reducers: {
        addCompetition: {
            reducer: (state, action) => {
                state.push({
                    name: action.payload.name,
                    id: action.payload.id,
                    status: "active",
                    winner: {},
                    participants: []
                })
            },
        },
        deleteCompetition: {
            reducer: (state, action) => {
                state.filter(item => item.id !== action.payload.id)
            },
        },
        setWinner: {
            reducer: (state, action) => {
                state.winner = Object.assign(action.payload);
            },
        },
        finishCompetition: {
            reducer: (state) => {
                state.status = "finished";
            },
        },
        addParticipant: {
            reducer: (state, action) => {
                let competition = state.find(competition => competition.id === action.payload.competitionId);
                competition.participants.push(action.payload.participantData);
            },
        },
        deleteParticipant: {
            reducer: (state, action) => {
                let competition = state.find(competition => competition.id === action.payload.competitionId);
                competition.participants = competition.participants.filter(item => item.id !== action.payload.participantId)
            },
        },
    }
})

export const {
    addCompetition,
    deleteCompetition,
    addParticipant,
    deleteParticipant,
    setWinner,
    finishCompetition
} = competitionsSlice.actions;
export default competitionsSlice.reducer;