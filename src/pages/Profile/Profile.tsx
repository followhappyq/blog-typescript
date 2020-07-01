import React from "react"
import app from "../../api/firebase/base"

interface Props {}

const Profile: React.FC = (props: Props) => {
  const onSignIn = async () => {
    try {
      await app
        .auth()
        .signInWithEmailAndPassword("ivandubovtsov@gmail.com", "password")
        .then((data) => {})
    } catch (error) {
      console.log(error)
    }
  }

  const onSignUp = async () => {
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword("ivandubovtsov@gmail.com", "password")
        .then((data) => {
          console.log(data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const onSignOut = async () => {
    try {
      await app.auth().signOut()
    } catch (error) {
      console.log(error)
    }
  }

  const onGetData = async () => {
    try {
      const db = app.firestore()
      const data = await (await db.collection("post").doc("post").get()).data()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="profile">
      <h3>Profile</h3>
      <button onClick={onSignIn}>Sign In</button>
      <button onClick={onSignUp}>Sign Up</button>
      <button onClick={onSignOut}>Sign Out</button>
      <button onClick={onGetData}>Get data</button>
    </div>
  )
}

export default Profile
