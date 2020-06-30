import React from "react"
import app from "../../api/firebase/base"

interface Props {}

const Profile = (props: Props) => {
  return (
    <div className="profile">
      <h3>Profile</h3>
      <button
        onClick={() => {
          app.auth().signOut()
        }}
      >
        Sign Out
      </button>
    </div>
  )
}

export default Profile
