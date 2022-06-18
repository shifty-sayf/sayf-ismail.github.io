import { useRouter } from "next/router";
import Link from 'next/link';

export default function Projects() {
  const router = useRouter;
  console.log('router', router());
  return (
    <div>
      index {router().query.pid}
      <Link href="/">Back to Home</Link>
    </div>
  )
}
