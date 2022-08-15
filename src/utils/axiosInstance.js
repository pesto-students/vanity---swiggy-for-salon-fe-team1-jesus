import axios from "axios";
import { useEffect, useCallback, useMemo } from "react";

let axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
};

export const rawAxiosRequest = axios.create(axiosConfig);

const useAxiosRequest = () => {
  const source = useMemo(() => {
    return axios.CancelToken.source();
  }, []);

  const cancelToken = useMemo(() => source.token, [source]);

  useEffect(() => {
    return () => source.cancel();
  }, [source]);

  const get = useCallback(
    (url) =>
      rawAxiosRequest.get(url, {
        cancelToken,
      }),
    [cancelToken]
  );

  const post = useCallback(
    (url, body) =>
      rawAxiosRequest.post(url, body, {
        cancelToken,
      }),
    [cancelToken]
  );

  const del = useCallback(
    (url, body) =>
      rawAxiosRequest.delete(url, { data: body, cancelToken }),
    [cancelToken]
  );

  return {
    get,
    post,
    del,
  };
};

export default useAxiosRequest;
