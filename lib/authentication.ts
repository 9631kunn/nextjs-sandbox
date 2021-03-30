import firebase from "firebase/app"

function authenticate() {
  firebase.auth()
    .signInAnonymously().catch(function (error) {
      const errorCode = error.code
      const errorMessage = error.message
    })

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid)
      console.log(user.isAnonymous)
    } else {
      // ログアウト
    }
  })
}

if (process.browser) {
  authenticate()
}
