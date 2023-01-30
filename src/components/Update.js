import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import GetDetailByHook from "../hooks/getDetailByHook";
import { updateDetail } from "../redux/actions/actions";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const studentById = GetDetailByHook(id);
  useEffect(() => {
    setFirstName(studentById.firstName);
    setLastName(studentById.lastName);
    setStudentCode(studentById.studentCode);
    console.log("render");
  }, [studentById]);

  const handleUpdate = (id) => {
    const updateStudent = {
      firstName,
      lastName,
      studentCode,
    };
    dispatch(updateDetail(id, updateStudent));
  };
  return (
    <div className="student-form">
      <div className="title">
        <h2>Edit Student</h2>
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
              setStudentCode(e.target.value);
            }}
          />
          <span className="message"></span>
        </div>
        <div className="btn-form">
          <button
            className="create-btn"
            onClick={(e) => {
              e.preventDefault();
              handleUpdate(id);
              navigate("/");
            }}
          >
            Edit Student
          </button>
          <button
            className="clear-btn"
            onClick={(e) => {
              e.preventDefault();
              setFirstName("");
              setLastName("");
              setStudentCode("");
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

export default Update;
