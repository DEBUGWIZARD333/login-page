import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");
  const [inputValue, setInputValue] = useState("");

  const handleLogin = () => {
    const value = inputValue.trim().toLowerCase();

    if (value === "admin") {
      setPage("admin");
    } else if (value === "user") {
      setPage("user");
    } else {
      alert("Please type 'admin' or 'user'");
    }
  };

  const handleLogout = () => {
    setPage("login");
    setInputValue("");
  };

  if (page === "admin") {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif", fontSize: "20px" }}>
        <h1>Welcome you are the admin</h1>
        <button onClick={handleLogout} style={{ fontSize: "20px", padding: "10px", width: "100px" }}>
          Logout
        </button>
      </div>
    );
  }

  if (page === "user") {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif", fontSize: "40px" }}>
        <h1>Welcome you are the user</h1>
        <button onClick={handleLogout} style={{ fontSize: "20px", padding: "10px", width: "100px" }}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#b02a2a", textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif", fontSize: "20px" }}> 
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Type admin or user"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ fontSize: "20px", padding: "10px", width: "300px" }}
      />
      <br />
      <br />
      <button onClick={handleLogin} style={{ fontSize: "20px", padding: "10px", width: "100px" }}>
        Login
      </button>
    </div>
  );
}

export default App;