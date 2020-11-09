import Axios from "axios";

export const getProjectList = async () => {
  return await Axios.get("http://localhost/myTask/api/projects").then(
    (res) => {
      return res.data;
    }
  );
};

/**
 * storeNewProject()
 *
 * @param {object} data
 */
export const storeNewProject = async (data) => {
  data.user_id = 1;
  return await Axios.post(
    "http://localhost/myTask/api/projects",
    data
  ).then((res) => {
    return res.data;
  });
};

export const updateProject = async (id, data) => {
  data.user_id = 1;
  return await Axios.put(
    `http://localhost/myTask/api/projects/${id}`,
    data
  ).then((res) => {
    return res.data;
  });
};

export const deleteProject = async (id) => {
  console.log("id", id);
  return await Axios.delete(
    `http://localhost/blogreactnew/api/projects/${id}`
  ).then((res) => {
    return res.data;
  });
};