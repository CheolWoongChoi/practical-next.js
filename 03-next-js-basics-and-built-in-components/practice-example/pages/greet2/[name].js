import { useRouter } from "next/router";

export default function GreetPage(props) {
  const { query } = useRouter();

  console.log(query);

  return (
    <main>
      <h1>Hello, {query.name}!</h1>
    </main>
  );
}
