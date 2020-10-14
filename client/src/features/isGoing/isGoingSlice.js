import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const isGoingSlice = createSlice({
  name: "userGoing",
  initialState: {
    isGoing: [],
  },
  reducers: {
    isGoing: (state, action) => {
      state.isGoing = action.payload
    },
  },
})

export const { isGoing } = isGoingSlice.actions

export const showGoing = () => (dispatch) => {
  axios.get("/api/IsGoing").then((r) => dispatch(isGoing(r.data)))
}

export const selectIsGoing = (state) => state.userGoing.isGoing

export default isGoingSlice.reducer
