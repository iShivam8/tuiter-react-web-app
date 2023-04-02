import { createSlice } from "@reduxjs/toolkit";
import profile from "./user.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.handle = action.payload.handle;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;