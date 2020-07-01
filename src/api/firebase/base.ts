import firebase from "firebase"
import "firebase/auth"

import config from "./configs/config"

export default firebase.initializeApp(config)
