import React from "react";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <div>
      <h1>Create an account</h1>
      <Navbar />
      <div>
        <input type="text" placeholder="Enter full name" />
      </div>
      <div>
        <input type="text" placeholder="Enter email" />
      </div>
      <div>
        <input type="password" placeholder="Enter password" />
      </div>
      <div>
        <input type="password" placeholder="Re-enter password" />
      </div>
      <button>Singup</button>
    </div>
  );
}

export default SignUp;
