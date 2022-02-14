import React from "react";
import { Form, FormControl } from "react-bootstrap";

const NavInput = () => {
  return (
    <Form inline>
      <FormControl
        style={{ width: "400px" }}
        type="text"
        placeholder="Search your destination"
        className="mr-sm-2"
      />
    </Form>
  );
};

export default NavInput;
