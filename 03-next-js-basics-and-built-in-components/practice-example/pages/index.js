import Link from "next/link";
import styles from "../styles/Global.module.css";

function Homepage() {
  return (
    <main>
      <div> This is the homepage </div>
      <div className={styles.home}>
        <Link href="/contact-us">contact-us</Link>
        <Link href="/posts">posts</Link>
        <Link href="/posts/2023-09-22/1">posts 2023-09-23/1</Link>
        <Link href="/posts/2023-09-23/2">posts 2023-09-23/2</Link>
        <Link href="/posts/2023-09-24/3">posts 2023-09-24/3</Link>
      </div>
    </main>
  );
}

export default Homepage;
