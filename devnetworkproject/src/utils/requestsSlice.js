import { createSlice } from "@reduxjs/toolkit";

const requestFeed = createSlice({
    name: 'request Slice',
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload
        },
    }
})

export const { addRequests } = requestFeed.actions
export default requestFeed.reducer;