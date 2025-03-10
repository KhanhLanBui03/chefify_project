import React from "react";

function AdminLogin() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Login</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <input type="text" placeholder="Admin Username" className="form-control mb-2" />
        <input type="password" placeholder="Admin Password" className="form-control mb-2" />
        <button className="btn btn-primary w-100">Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;