import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { actions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.details);
  const isDelete = useSelector((state) => state.isDelete);
  useEffect(() => {
    dispatch(actions.getDetail());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <div className="student-table">
        <div className="title">
          <h2>Student Management</h2>
        </div>
        <div className="btn-table">
          <Link to="/add">
            <button className="add-btn">+ Add Student</button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <th>STT</th>
            <th>Fristname</th>
            <th>Lastname</th>
            <th>Student Code</th>
            <th></th>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.studentCode}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Link to={`/edit/${student.id}`}>
                    <EditOutlined />
                  </Link>
                  <DeleteOutlined
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(actions.deleteDetail(student.id));
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
