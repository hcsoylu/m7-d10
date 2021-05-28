import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div>
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loader;
