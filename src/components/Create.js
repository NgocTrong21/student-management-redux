import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addDetail } from "../redux/actions/actions";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentCode, setStudenCode] = useState("");
  const hanldeSubmit = () => {
    const newStudent = {
      firstName,
      lastName,
      studentCode,
    };
    dispatch(addDetail(newStudent));
  };
  return (
    <div className="student-form">
      <div className="title">
        <h2>Add Student</h2>
      </div>
      <form action="" id="form_1">
        <div className="form-group">
          <input
            type="text"
            id="first_name"
            className="form-control"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <span className="message"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="last_name"
            className="form-control"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <span className="message"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="student_code"
            className="form-control"
            placeholder="Student Code"
            value={studentCode}
            onChange={(e) => {
              setStudenCode(e.target.value);
            }}
          />
          <span className="message"></span>
        </div>
        <div className="btn-form">
          <button
            className="create-btn"
            onClick={(e) => {
              e.preventDefault();
              hanldeSubmit();
              navigate("/");
            }}
          >
            Create Student
          </button>
          <button
            className="clear-btn"
            onClick={(e) => {
              e.preventDefault();
              setFirstName("");
              setLastName("");
              setStudenCode("");
            }}
          >
            Clear
          </button>
          <Link to="/">
            <button className="cancel-btn">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
