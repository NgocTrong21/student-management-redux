import { GET_DETAIL, ADD_DETAIL, DELETE_DETAIL, UPDATE_DETAIL } from "../type";
import { GetApi, PostApi, DeleteApi, UpdateApi } from "../../api/axiosRequest";

const getDetail = () => {
  return function (dispatch) {
    GetApi()
      .then((res) => {
        dispatch({
          type: GET_DETAIL,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addDetail = (request) => {
  return function (dispatch) {
    dispatch({
      type: ADD_DETAIL,
      payload: false,
    });
    PostApi(request)
      .then(() => {
        dispatch({
          type: ADD_DETAIL,
          payload: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateDetail = (id, data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAIL,
      payload: false,
    });
    UpdateApi(id, data)
      .then(() => {
        dispatch({
          type: UPDATE_DETAIL,
          payload: true,
        });
      })
      .then((error) => {
        console.log(error);
      });
  };
};

const deleteDetail = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAIL,
      payload: false,
    });
    DeleteApi(id)
      .then(() => {
        dispatch({
          type: DELETE_DETAIL,
          payload: true,
        });
        dispatch(getDetail());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export { getDetail, addDetail, deleteDetail, updateDetail };
