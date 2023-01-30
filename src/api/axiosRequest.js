import axios from "axios";
export const AxiosRequest = (url, method, params) => {
  return params
    ? axios({
        method: method,
        url: url,
        data: params,
      })
    : axios({
        method: method,
        url: url,
        data: {},
      });
};

const GetApi = () => {
  return AxiosRequest("http://localhost:3006/students", "get", {});
};
const PostApi = (data) => {
  return AxiosRequest("http://localhost:3006/students", "post", data);
};
const GetApiById = (id) => {
  return AxiosRequest("http://localhost:3006/students/" + id, "get", {});
};
const UpdateApi = (id, data) => {
  return AxiosRequest("http://localhost:3006/students/" + id, "put", data);
};
const DeleteApi = (id) => {
  return AxiosRequest("http://localhost:3006/students/" + id, "delete", {});
};
export { GetApi, PostApi, DeleteApi, GetApiById, UpdateApi };
