import Navbar from "./Navbar";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Navbar />
      <div>
        <input type="text" placeholder="Enter email/username" />
      </div>
      <div>
        <input type="password" placeholder="Enter password" />
      </div>
      <button>Login</button>
    </div>
  );
}

export default Login;
