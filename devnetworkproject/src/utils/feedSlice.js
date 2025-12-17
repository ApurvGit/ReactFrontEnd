import { createSlice } from "@reduxjs/toolkit";

const userFeed = createSlice({
    name: "Feed Slice",
    initialState: {},
    reducers: {
        addFeed: (state, action) => {
            return action.payload
        },
        removeFeed: (state, action) => {
            const updatedState = state.filter((user) => user._id !== action.payload);
            console.log(updatedState)
            return updatedState
        },
    },

})

export const { addFeed, removeFeed } = userFeed.actions;
export default userFeed.reducer