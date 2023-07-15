import { create } from "apisauce";
import qs from "query-string";

const request = async (method, path, data) => {
  const baseURL = "https://explorer.fuse.io/";

  const client = create({
    baseURL,
    headers: {},
  });
  let response = undefined;
  try {
    if (
      method === "GET" &&
      (typeof data === "object" || typeof data === "string")
    ) {
      path += "?" + qs.stringify(data);
    }
    if (method !== "GET") {
      response = await client[method.toLowerCase()](path, data);
    } else {
      response = await client[method.toLowerCase()](path);
    }
  } catch (error) {
    response = error.response;
  }
  if (response.problem === "TIMEOUT_ERROR") {
    let resp = JSON.stringify(response);
    throw Object(JSON.parse(resp));
  }
  if (response.problem === "NETWORK_ERROR") {
    let resp = JSON.stringify(response);
    throw Object(JSON.parse(resp));
  }
  if (response.status === 400) {
    let resp = JSON.stringify(response.data);
    throw Object(JSON.parse(resp));
  }
  if (response.status >= 400) {
    if (response.status === 401) {
      let resp = JSON.stringify(response.data);
      throw Object(JSON.parse(resp));
    }
    if (response.status === 422) {
      let resp = JSON.stringify(response.data);
      throw Object(JSON.parse(resp));
    }
    if (response.status === 404) {
      let resp = JSON.stringify(response.data);
      throw Object(JSON.parse(resp));
    }
    if (response.status === 403) {
      let resp = JSON.stringify(response.data);
      throw Object(JSON.parse(resp));
    }
    if (response.status === 500) {
      if (response.data?.message) {
        throw Object(JSON.parse(response));
      }
      // internal server error
      let resp = JSON.stringify(response.data);
      throw Object(JSON.parse(resp));
    }
    if (response.status === 502) {
      let resp = JSON.stringify(response.data);
      throw Object(JSON.parse(resp));
    }
    let resp = JSON.stringify(response.data);
    throw Object(`Unhandled Error: ${JSON.parse(resp)}`);
  }
  if (response.problem) {
    let resp = JSON.stringify(response.problem);
    throw Object(JSON.parse(resp));
  }
  return response.data;
};

export default request;
