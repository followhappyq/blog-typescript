import React, { useState, useEffect } from "react"

import app from "../api/firebase/base"

interface Props {
  children: any
}

export const AuthContext = React.createContext({})

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser]: any = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}
