import Link from "next/link";
import styles from "../styles/Global.module.css";
import { useRouter } from "next/router";

export default function ClientNavigataionPage() {
  const DYNAMIC_POSTS_LINK = "/posts/[date]/[slug]";
  const POSTS_QUERY = {
    date: "2023-09-23",
    slug: "happy",
    foo: "bar",
  };

  const router = useRouter();

  return (
    <main className={styles.clientNavigation}>
      <Link href="/" prefetch={false}>
        Index
      </Link>
      <Link href="/contact-us">Contact-us</Link>
      <Link href="/posts/2023-09-23/1">Posts/2023-09-23/1</Link>
      <Link
        href={{
          pathname: DYNAMIC_POSTS_LINK,
          query: POSTS_QUERY,
        }}
      >
        Posts/2023-09-23/happy
      </Link>
      <div>
        <p
          onClick={() =>
            // router.push({
            //   pathname: DYNAMIC_POSTS_LINK,
            //   query: POSTS_QUERY,
            // })
            router.push({
              pathname: "/posts/2023-09-23/10",
              query: { name: "hello" },
            })
          }
        >
          router.push ('posts dynamic link')
        </p>
      </div>
    </main>
  );
}
