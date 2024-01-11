"use server";
import { cookies, headers } from "next/headers";
import { Suspense } from "react";
import { Pre } from "./Pre";

const RequestResult: React.FC<{ path: string }> = async ({ path }) => {
  const response = await fetch(`https://httpbin.org/anything/${path}`)
    .then((response) => response.json())
    .then((response) => JSON.stringify(response, null, 2));

  return <pre className="bg-zinc-500 p-4 rounded-md">{response}</pre>;
};

export interface ServerProps {
  path: string;
}
export const Server: React.FC<ServerProps> = ({ path }) => {
  const cookieStore = cookies();
  const headersList = Array.from(headers().entries());

  return (
    <div>
      <p className="text-xl font-bold">Server Side Component</p>

      <Suspense fallback="waiting for it...">
        <RequestResult path={path} />
      </Suspense>

      {headersList.length > 0 && (
        <section className="mt-4">
          <header>Headers:</header>
          <Pre>
            {headersList.map(([name, value]) => (
              <div key={name}>
                <p>
                  {name}: {value}
                </p>
              </div>
            ))}
          </Pre>
        </section>
      )}

      {cookieStore.size > 0 && (
        <section>
          <header>Cookies</header>
          <Pre>
            {cookieStore.getAll().map((cookie) => (
              <div key={cookie.name}>
                <p>
                  {cookie.name}: {cookie.value}
                </p>
              </div>
            ))}
          </Pre>
        </section>
      )}
    </div>
  );
};
