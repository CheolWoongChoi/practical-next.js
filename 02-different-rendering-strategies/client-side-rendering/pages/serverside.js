export async function getServerSideProps() {
  const userRequest = await fetch("http://localhost:3000/api/hello");
  const userData = await userRequest.json();

  return {
    props: {
      user: userData,
    },
  };
}

function ServerSidePage(props) {
  return <div>Welcome, {props.user.name}</div>;
}

export default ServerSidePage;
