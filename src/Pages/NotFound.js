import React from "react";
import Link from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-decoration-none text-center mx-auto col-12">
      <h3>Page not Found!</h3>
      <span>
        <Link className="notfound" to="/login">
          Back to login
        </Link>
      </span>
    </div>
  );
}
