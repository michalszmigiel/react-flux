import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <div>
      <h2>404</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default FourOhFour;
