import { useState } from "react";
function Login() {
  //login logic
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let jwt_token = localStorage.getItem("token");
  function handleLogin(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        if (!userInfo.token) {
          alert("Invalid Username or Password");
          return null;
        }
        localStorage.token = userInfo.token;
        localStorage.setItem(`userId`, `${userInfo.user.id}`);
      });
    console.log(localStorage.token);
  }
  return (
    <>
      <label as="h2">Login</label>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button as="button" type="submit">
          Submit
        </button>
      </form>
      <button as="button" type="submit" onClick={() => localStorage.clear()}>
        Log Out
      </button>
    </>
  );
}
export default Login;
