/*function Signup({ setPage }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Institution" />

        <button>Create Account</button>

        <p onClick={()=>setPage("login")}>Sign in</p>
      </div>
    </div>
  );
}

export default Signup;*/

function Signup({ setPage }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Institution" />

        <button>Create Account</button>

        <p onClick={() => setPage("login")}>Sign in</p>
      </div>
    </div>
  );
}

export default Signup;