/*function Navbar({ user, setUser, setPage }) {
  return (
    <div className="navbar">
      <h1 className="logo" onClick={() => setPage("home")}>🎓 AcadeX</h1>

      <div className="nav-right">
        {!user ? (
          <>
            <button onClick={() => setPage("login")}>Login</button>
            <button className="primary" onClick={() => setPage("signup")}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            <span>{user}</span>
            <button onClick={() => { setUser(null); setPage("home"); }}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;*/

function Navbar({ user, setUser, setPage }) {
  return (
    <div className="navbar">
      <h1 className="logo" onClick={() => setPage("home")}>
        🎓 AcadeX
      </h1>

      <div className="nav-right">
        {!user ? (
          <>
            <button onClick={() => setPage("login")}>Login</button>
            <button className="primary" onClick={() => setPage("signup")}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            <span>{user}</span>
            <button onClick={() => { setUser(null); setPage("home"); }}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;