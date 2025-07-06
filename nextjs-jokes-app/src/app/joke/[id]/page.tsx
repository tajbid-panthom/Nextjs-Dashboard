// app/joke/[id]/page.tsx

import { getJokeById, jokes } from "@/app/lib/jokes";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return jokes.map((joke) => ({
    id: joke.id,
  }));
}

export default function JokePage({ params }: Props) {
  const joke = getJokeById(params.id);

  if (!joke) return <p>Joke not found!</p>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{joke.title}</h1>
      <p>{joke.content}</p>
    </main>
  );
}
