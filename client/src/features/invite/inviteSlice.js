import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    invitee: {},
  },
  reducers: {
    display: (state, action) => {
      state.invitee = action.payload
    },
  },
})

export const { display } = inviteSlice.actions

export const getUser = () => (dispatch) => {
  axios.get("/api").then((r) => dispatch(display(r.data)))
}

export const isGoingUser = (user) => (dispatch) => {
  axios
    .post("/api/mark-invitee", { ...user, going: true })
    .then((r) => dispatch(getUser()))
}

export const notGoingUser = (user) => (dispatch) => {
  axios
    .post("/api/mark-invitee", { ...user, going: false })
    .then((r) => dispatch(getUser()))
}

export const selectInvitee = (state) => state.invite.invitee

export default inviteSlice.reducer
