import React from "react";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form style={{ width: "30%" }}>
        <h3 className="text-center">Login account</h3>

        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail3" />
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <input type="password" className="form-control" id="inputPassword3" />

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Login an account
        </button>
        <div className="text-center mt-3">
          <span>Already have an account?</span>
          <span>
            <b>Register here</b>
          </span>
        </div>
      </form>
    </div>
  );
}
