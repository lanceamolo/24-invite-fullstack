import { configureStore } from "@reduxjs/toolkit"
import inviteReducer from "../features/invite/inviteSlice"
import isGoingReducer from "../features/isGoing/isGoingSlice"
import isNotGoingReducer from "../features/notGoing/notGoingSlice"

export default configureStore({
  reducer: {
    invite: inviteReducer,
    userGoing: isGoingReducer,
    userNotGoing: isNotGoingReducer,
  },
})
