import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "Martin Garrix",
    "handle": "@Martijn",
    "image": "../../images/Garrix-dp.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "EDM",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        updateTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload._id);
            console.log("liked triggered!")
            state[index] = action.payload
        }
    }
});
export const {createTuit, deleteTuit, updateTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;