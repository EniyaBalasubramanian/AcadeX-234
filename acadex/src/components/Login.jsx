/*import { useState } from "react";

function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" />

        <button onClick={()=>{
          setUser(email.split("@")[0]);
          setPage("home");
        }}>
          Sign In
        </button>

        <p onClick={()=>setPage("signup")}>Sign up</p>
      </div>
    </div>
  );
}

export default Login;*/

import { useState } from "react";

function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" />

        <button
          onClick={() => {
            setUser(email.split("@")[0]);
            setPage("home");
          }}
        >
          Sign In
        </button>

        <p onClick={() => setPage("signup")}>Sign up</p>
      </div>
    </div>
  );
}

export default Login;