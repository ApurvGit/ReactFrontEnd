import { createSlice } from "@reduxjs/toolkit";

const connectionFeed = createSlice({
   name: "Connection Slice",
   initialState: {},
   reducers: {
      addConnection: (state, action) => {
         return action.payload
      },
      removeConnection: () => null,
   },

})

export const { addConnection, removeConnection } = connectionFeed.actions;
export default connectionFeed.reducer