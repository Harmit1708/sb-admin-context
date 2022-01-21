import React,{useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {useNavigate} from 'react-router-dom'
import { StudentContext } from "../App";
import {useContext} from 'react'

function Addstudents() {

  let context = useContext(StudentContext);

  let navigate = useNavigate();
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [mobile,setMobile] = useState("");
  let [cls,setCls] = useState("");

let handlesubmit = () => {
  let newData  = {name,email,mobile,"class":cls};
  let newArr = [...context.students]
  newArr.push(newData);
  context.setStudents(newArr)

  navigate("/all-students");
}

  return (
    <Form className="Addstu">
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
        Submit
      </Button>
    </Form>
  );
}

export default Addstudents;
