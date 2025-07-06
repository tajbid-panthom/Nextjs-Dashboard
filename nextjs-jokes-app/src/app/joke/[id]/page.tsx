// app/joke/[id]/page.tsx

import { getJokeById } from "@/app/lib/jokes";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
  ];
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const joke = getJokeById(id);
  if (!joke) notFound();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{joke.title}</h1>
      <p>{joke.content}</p>
    </main>
  );
}
