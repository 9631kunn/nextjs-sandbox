import {useEffect} from "react"

import firebase from "firebase/app"
import { User } from "../models/User"
import {atom, useRecoilState} from "recoil"

const userState = atom<User>({
  key: "user",
  default: null
})

export function useAuthentication() {
  const [user, setUser] = useRecoilState(userState)

  // 最初のアクセス時判定
  useEffect(() => {
    if (user !== null) {
      return
    }

    firebase.auth()
      .signInAnonymously().catch(function (error) {
        console.error(error)
      })

    firebase.auth().onAuthStateChanged(function (firebaseUser) {
      if (firebaseUser) {
        // ログイン
        setUser({
          uid: firebaseUser.uid,
          isAnonymous: firebaseUser.isAnonymous
        })
      } else {
        // 未ログイン
        setUser(null)
      }
    })
  }, [])

  return {user}
}
