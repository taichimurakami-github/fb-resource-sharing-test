import React, { useState } from "react";

export default function SignIn(props: {
  onHandleSignInWithEmailAndPwd: (email: string, password: string) => void;
}) {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("hogefuga");
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSignIn = () => {
    if (email && password) {
      props.onHandleSignInWithEmailAndPwd(email, password);
    }
  };

  return (
    <div>
      <h1>SignIn page</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSignIn();
        }}
      >
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>サインイン</button>
        </div>
      </form>
    </div>
  );
}
