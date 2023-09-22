export async function getServerSideProps() {
  const id = Math.floor(Math.random() * 100);

  const postRequest = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await postRequest.json();

  return {
    props: {
      post,
    },
  };
}

function ServerSidePage(props) {
  const { post } = props;

  return <div>Welcome, {JSON.stringify(post)}</div>;
}

export default ServerSidePage;
