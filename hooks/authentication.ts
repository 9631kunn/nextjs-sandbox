import { useEffect } from "react";

import firebase from "firebase/app";
import { User } from "../models/User";
import { atom, useRecoilState } from "recoil";

const userState = atom<User>({
  key: "user",
  default: null,
});

async function createUserIfNotFound(user: User) {
  const userRef = firebase.firestore().collection("users").doc(user.uid);
  const doc = await userRef.get();
  if (doc.exists) {
    return;
  }
  await userRef.set({
    name: "名無し" + new Date().getTime(),
  });
}

export function useAuthentication() {
  const [user, setUser] = useRecoilState(userState);

  // 最初のアクセス時判定
  useEffect(() => {
    if (user !== null) {
      return;
    }

    firebase
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        console.error(error);
      });

    firebase.auth().onAuthStateChanged(function (firebaseUser) {
      if (firebaseUser) {
        // ログイン
        const loginUser: User = {
          uid: firebaseUser.uid,
          isAnonymous: firebaseUser.isAnonymous,
        };
        setUser(loginUser);
        createUserIfNotFound(loginUser);
      } else {
        // 未ログイン
        setUser(null);
      }
    });
  }, []);

  return { user };
}
