import useUserDB from "../hooks/useUserDB";
import { useAuthContext } from "../context/AuthProvider";

export default function UserTop() {
  const { user } = useAuthContext();

  const { userState } = useUserDB(user?.email ?? "");

  return (
    <div>
      <h1>User Top page</h1>
      <div>
        <h2>User Info</h2>
        <div>{JSON.stringify(userState)} </div>
      </div>
    </div>
  );
}
