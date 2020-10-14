import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { showNotGoing, selectIsNotGoing } from "../notGoing/notGoingSlice.js"

export default function NotGoing() {
  const dispatch = useDispatch()
  const usersNotGoing = useSelector(selectIsNotGoing) // tracked state
  console.log(usersNotGoing)

  useEffect(() => {
    dispatch(showNotGoing())
  }, [])

  return (
    <div className="isNotGoingContainer">
      <div className="isNotGoingHeader">
        <h1>Not Going</h1>
      </div>
      <div className="isGoingBody">
        {usersNotGoing.map((item) => (
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
