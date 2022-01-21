import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../App";

function EditStudent() {

  let context = useContext(StudentContext);

  useEffect(() => {
    if (params.id < context.students.length) {
      getData();
    } else {
      alert("Selected student is not available");
    }
  }, []);

  let params = useParams();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [cls, setCls] = useState("");

  let getData = () => {
    setName(context.students[params.id].name);
    setEmail(context.students[params.id].email);
    setMobile(context.students[params.id].mobile);
    setCls(context.students[params.id].class);
  };

  let handlesubmit = () => {
    let newData = { name, email, mobile, class: cls };
    let newArr = [...context.students]
    newArr.splice(params.id,1,newData)
    context.setStudents(newArr);
    navigate("/all-students");
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={mobile}
          type="Number"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Class</Form.Label>
        <Form.Control
          value={cls}
          type="text"
          placeholder="Class"
          onChange={(e) => setCls(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Update
      </Button>
    </Form>
  );
}

export default EditStudent;