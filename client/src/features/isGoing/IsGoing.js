import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { showGoing, selectIsGoing } from "../isGoing/isGoingSlice.js"

export default function IsGoing() {
  const dispatch = useDispatch()
  const usersGoing = useSelector(selectIsGoing) // tracked state
  console.log(usersGoing)

  useEffect(() => {
    dispatch(showGoing())
  }, [])

  return (
    <div className="isGoingContainer">
      <div className="isGoingHeader">
        <h1>Going</h1>
      </div>
      <div className="isGoingBody">
        {usersGoing.map((item) => (
          <div>
            <div className="goingUser">
              <div className="userImage">
                <img
                  className="goingImg"
                  src={item.imgLarge}
                  alt="profile picture"
                ></img>
              </div>
              <div className="userInfo">
                <div className="userName">
                  <span>Name:</span> {item.first} {item.last}
                </div>
                <div className="userEmail">
                  <span>Email:</span> {item.email}
                </div>
                <div className="userPhone">
                  <span>Phone:</span> {item.phone}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
