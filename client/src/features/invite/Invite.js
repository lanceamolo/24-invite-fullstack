import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getUser,
  isGoingUser,
  notGoingUser,
  selectInvitee,
} from "./inviteSlice.js"
import { selectIsGoing, showGoing } from "../isGoing/isGoingSlice.js"
import { selectIsNotGoing, showNotGoing } from "../notGoing/notGoingSlice.js"

export default function Invite() {
  const dispatch = useDispatch()
  const invitee = useSelector(selectInvitee) // tracked state
  const usersGoing = useSelector(selectIsGoing) // tracked state
  const usersNotGoing = useSelector(selectIsNotGoing) // tracked state

  console.log(invitee)
  console.log(usersGoing)
  console.log(usersNotGoing)

  useEffect(() => {
    dispatch(getUser())
    dispatch(showGoing())
    dispatch(showNotGoing())
  }, [])

  function handleReject(e) {
    e.preventDefault()
    dispatch(getUser())
  }

  function handleAccept(e) {
    e.preventDefault()
    dispatch(getUser())
  }

  return (
    <div className="container">
      <div className="goingOrNotGoing">
        <div>Going: {usersGoing.length}</div>{" "}
        <div>Not Going: {usersNotGoing.length}</div>
      </div>
      <div className="randomUser">
        <div className="userImage">
          <img
            className="profilePic"
            src={invitee.imgLarge}
            alt="profile picture"
          ></img>
        </div>
        <div className="userInfo">
          <div className="userName">
            <span>Name:</span> {invitee.first} {invitee.last}
          </div>
          <div className="userEmail">
            <span>Email:</span> {invitee.email}
          </div>
          <div className="userPhone">
            <span>Phone:</span> {invitee.phone}
          </div>
        </div>
        <div className="inviteBtns">
          <button
            onClick={() => dispatch(notGoingUser(invitee))}
            className="notGoingBtn"
          >
            not going
          </button>
          <button
            onClick={() => dispatch(isGoingUser(invitee))}
            className="goingBtn"
          >
            is going
          </button>
        </div>
      </div>
    </div>
  )
}
