import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: REQUEST_TIMEOUT,
});

export const api = async (
  endpoint,
  { method, params, requestData, token, headers, ...customConfig }
) => {
  const config = {
    method,
    headers: {
      Authorization: token ? `${token}` : "",
      "Content-Type": headers?.contentType ? headers.contentType : "application/json",
      ..._.omit(headers, ["contentType"]),
    },
    params,
    data: requestData,
    ...customConfig,
  };

  const response = await axiosInstance(endpoint, { ...config });
  return response;
};


// For testing only, TODO: remove
export async function fetchPost(id) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`This is post ID ${id}`);
    }, 500)
  );
}
