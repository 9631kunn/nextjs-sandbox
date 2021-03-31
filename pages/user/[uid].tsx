import firebase from "firebase/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { User } from "../../models/User";

type Query = {
  uid: string;
};

export default function UserShow() {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();
  const query = router.query as Query;

  useEffect(() => {
    // 初回レンタリング時queryはundefinedのため
    // ref: https://nextjs.org/docs/advanced-features/automatic-static-optimization#how-it-works
    if (query.uid === undefined) {
      return;
    }

    async function loadUser() {
      const doc = await firebase.firestore().collection("users").doc(query.uid).get();
      if (!doc.exists) {
        return;
      }
      const gotUser = doc.data() as User;
      gotUser.uid = doc.id;
      setUser(gotUser);
    }
    loadUser();
  }, [query.uid]);
  return <div>{user ? user.name : "ロード中"}</div>;
}
