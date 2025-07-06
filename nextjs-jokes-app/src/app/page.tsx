import Link from "next/link";
import { Joke, jokes } from "./lib/jokes";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>😂 Joke List</h1>
      <ul>
        {jokes.map((joke: Joke) => (
          <li key={joke.id}>
            <Link href={`/joke/${joke.id}`}>{joke.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
