import * as firebase from "firebase/app"
import "firebase/auth"

import config from "./configs/config"

export default firebase.initializeApp(config)
