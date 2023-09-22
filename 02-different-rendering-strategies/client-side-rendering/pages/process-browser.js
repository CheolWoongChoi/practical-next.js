import styles from "../styles/Home.module.css";

function ProcessBrowserPage() {
  // const side = process.browser ? "client" : "server";
  const side = typeof window === "undefined" ? "server" : "client";

  return (
    <>
      <main className={styles.main}>
        <p> I'm running on the {side} </p>
      </main>
    </>
  );
}

export default ProcessBrowserPage;
