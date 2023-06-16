import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";

export default function useUserDB(userEmail: string) {
  const [userState, setUserState] = useState<any>({});
  const [collections, _loading, _error] = useCollection(
    collection(getFirestore(), "users")
  );

  useEffect(() => {
    if (collections) {
      collections.docs.map((doc) => {
        const data = doc.data();
        console.log(data);

        if (data?.email === userEmail) {
          setUserState(doc.data());
        }
      });
    }
  }, [collections, userEmail]);

  return { userState };
}
