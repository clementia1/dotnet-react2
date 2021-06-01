import { configureStore } from '@reduxjs/toolkit';
import competitionsReducer from './competitionsSlice';


export default configureStore({
    reducer: {
        competitions: competitionsReducer,
    },
    preloadedState: {
        competitions: [{
            name: "Eating burgers",
            id: "MSpiWdrcx7",
            status: "active",
            winner: {},
            participants: [{
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
            }]
        }]
    }
});
