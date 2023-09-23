export async function getServerSideProps({ params }) {
  const { name } = params;

  // const url = `http://localhost:5000`;
  const url = `https://jsonplaceholder.typicode.com/posts/${name}`;

  const postRequest = await fetch(url);
  const post = await postRequest.json();

  console.log(post);

  return {
    props: {
      name,
      post,
    },
  };
}

export default function GreetPage(props) {
  return (
    <main>
      <h1>Hello, {props.name}!</h1>
      <p>{JSON.stringify(props.post)}</p>
    </main>
  );
}
