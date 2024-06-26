import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [datas, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get(endpoint, { signal: controller.signal, ...requestConfig })
        .then(({ data: { results } }: { data: FetchResponse<T> }) => {
          setData(results);
          setIsLoading(false);
        })
        .catch((err: AxiosError) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { datas, error, isLoading };
}

export default useData;
