import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const isNotGoingSlice = createSlice({
  name: "userNotGoing",
  initialState: {
    notGoing: [],
  },
  reducers: {
    notGoing: (state, action) => {
      state.notGoing = action.payload
    },
  },
})

export const { notGoing } = isNotGoingSlice.actions

export const showNotGoing = () => (dispatch) => {
  axios.get("/api/NotGoing").then((r) => dispatch(notGoing(r.data)))
}

export const selectIsNotGoing = (state) => state.userNotGoing.notGoing

export default isNotGoingSlice.reducer
