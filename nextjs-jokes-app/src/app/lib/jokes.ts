export interface Joke {
  id: string;
  title: string;
  content: string;
}

export const jokes: Joke[] = [
  {
    id: "1",
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!",
  },
  {
    id: "2",
    title: "What did the ocean say to the beach?",
    content: "Nothing, it just waved.",
  },
  {
    id: "3",
    title: "Why did the scarecrow win an award?",
    content: "Because he was outstanding in his field!",
  },
  {
    id: "4",
    title: "Why can’t your nose be 12 inches long?",
    content: "Because then it would be a foot.",
  },
  {
    id: "5",
    title: "Why did the math book look sad?",
    content: "Because it had too many problems.",
  },
  {
    id: "6",
    title: "Why did the coffee file a police report?",
    content: "It got mugged.",
  },
  {
    id: "7",
    title: "What do you call fake spaghetti?",
    content: "An impasta!",
  },
  {
    id: "8",
    title: "Why don't programmers like nature?",
    content: "It has too many bugs.",
  },
  {
    id: "9",
    title: "How does a penguin build its house?",
    content: "Igloos it together.",
  },
  {
    id: "10",
    title: "What did one wall say to the other wall?",
    content: "I’ll meet you at the corner.",
  },
  {
    id: "11",
    title: "Why was the computer cold?",
    content: "It left its Windows open.",
  },
  {
    id: "12",
    title: "Why did the cookie go to the hospital?",
    content: "Because it felt crummy.",
  },
  {
    id: "13",
    title: "Why did the bicycle fall over?",
    content: "Because it was two-tired!",
  },
];

export const getJokeById = (id: string): Joke | undefined =>
  jokes.find((joke) => joke.id === id);
