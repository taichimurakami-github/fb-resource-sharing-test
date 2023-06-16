import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import { useAuthContext } from "./context/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import UserTop from "./components/Top";

export type PageState = "SignUp" | "SignIn" | "Top";

function App() {
  const [pageState, setPageState] = useState<PageState>("SignIn");
  const { user, auth } = useAuthContext();

  const handleSignInWithEmailAndPwd = async (
    email: string,
    password: string
  ) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    setPageState(user ? "Top" : "SignIn");
  }, [user]);

  return (
    <>
      <h1>FB Multiple Site Hosting With Resource Sharing Test</h1>
      <p>page: app01</p>
      {pageState === "SignIn" && (
        <SignIn onHandleSignInWithEmailAndPwd={handleSignInWithEmailAndPwd} />
      )}
      {pageState === "Top" && <UserTop />}
    </>
  );
}

export default App;
