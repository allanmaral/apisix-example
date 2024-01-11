"use client";

import { useRef, useState } from "react";
import { Pre } from "./Pre";

const useRequest = (path: string) => {
  const requestStarted = useRef<boolean>(false);
  const [data, setData] = useState<string>();
  const [error, setError] = useState<Error>();

  if (!requestStarted.current) {
    requestStarted.current = true;
    fetch(`https://httpbin.org/anything/${path}`)
      .then((response) => response.json())
      .then((response) => JSON.stringify(response, null, 2))
      .then(setData)
      .catch(setError);
  }

  return { data, error };
};

export interface ClientProps {
  path: string;
}
export const Client: React.FC<ClientProps> = ({ path = "" }) => {
  const { data, error } = useRequest(path);

  return (
    <div>
      <p className="text-xl font-bold">Client Side Component</p>

      <Pre>
        {!!data && !error && data}
        {!data && !error && "loading..."}
        {!!error && error.message}
      </Pre>
    </div>
  );
};
