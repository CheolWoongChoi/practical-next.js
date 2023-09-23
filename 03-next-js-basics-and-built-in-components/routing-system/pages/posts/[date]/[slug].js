import React from "react";
import { useRouter } from "next/router";

export default function PostSlugPage() {
  const router = useRouter();

  return <div>PostSlugPage {router.asPath}</div>;
}
