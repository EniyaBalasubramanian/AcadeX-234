/*import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import View from "./components/View";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await fetch("http://localhost:5000/files");
    const data = await res.json();
    setFiles(data);
  };

  return (
    <div className="app">
      <Navbar user={user} setUser={setUser} setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "login" && <Login setUser={setUser} setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "upload" && <Upload user={user} />}
      {page === "view" && <View files={files} fetchFiles={fetchFiles} />}
    </div>
  );
}

export default App;*/

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import View from "./components/View";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await fetch("http://localhost:5000/files");
    const data = await res.json();
    setFiles(data);
  };

  
  return (
    <div className="app">
      <Navbar user={user} setUser={setUser} setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "login" && <Login setUser={setUser} setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "upload" && <Upload user={user} />}
      {page === "view" && <View files={files} fetchFiles={fetchFiles} />}
    </div>
  );
}

export default App;