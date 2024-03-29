import React from "react";

const LoginForm = () => {
  const handleLogin = () => {
    // Open a new empty page when login button is clicked
    window.open('', '_blank');
  };

  return (
    <div className="login-form">
      <h3
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "20px",
          backgroundColor: "#ddd",
        }}
      >
        Log In
      </h3>
      <input
        type="text"
        placeholder="Username"
        style={{
          marginBottom: "10px",
          padding: "8px",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "4px",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{
          marginBottom: "10px",
          padding: "8px",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleLogin} // Call handleLogin function when button is clicked
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;

