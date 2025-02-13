import Link from "next/link";
import styles from "../styles/Breadcrumbs.module.css";

function BreadCrumbs() {
  return (
    <div className={styles.breadcrumbs}>
      <Link href="/">
        <div className={styles.children}>Home</div>
      </Link>
      <Link href="/use-effect">
        <div className={styles.children}>useEffect</div>
      </Link>
      <Link href="/process-browser">
        <div className={styles.children}>process.browser</div>
      </Link>
      <Link href="/dynamic-component">
        <div className={styles.children}>dynamic</div>
      </Link>
      <Link href="/server-side">
        <div className={styles.children}>ssr</div>
      </Link>
      <Link href="/static-generation">
        <div className={styles.children}>ssg</div>
      </Link>
    </div>
  );
}

export default BreadCrumbs;
