import { Client } from "@/components/Client";
import { Server } from "@/components/Server";

export default function Sample({ params }: { params: { path: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl">{params.path}</h1>
      <Client path={params.path} />
      <div className="pt-10">
        <Server path={params.path} />
      </div>
    </main>
  );
}
