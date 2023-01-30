import { useEffect, useState } from "react";
import { GetApiById } from "../api/axiosRequest";

const GetDetailByHook = (props) => {
  const [detailById, setDetailById] = useState({});
  const getDetailByHook = (props) => {
    GetApiById(props).then((res) => {
      setDetailById(res.data);
    });
  };
  useEffect(() => {
    getDetailByHook(props);
  }, []);
  return detailById;
};

export default GetDetailByHook;
