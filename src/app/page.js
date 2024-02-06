import dynamic from "next/dynamic";

export default function Home() {
  const DynamicMapImport = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  return (
    <main>
      <div className="h-screen w-screen flex-col items-center font-mono px-12 py-6">
        <h1 className="my-6 text-center">Next.js Map Application Demo</h1>
        <DynamicMapImport />
      </div>
    </main>
  );
}
