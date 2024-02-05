import { Map } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-between font-mono text-sm lg:flex">
        <h1 className="my-6">Next.js Map Application</h1>
        <Map />
      </div>
    </main>
  );
}
