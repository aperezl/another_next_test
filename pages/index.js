import { getPost } from "../lib/mdx";
import Login from '../components/Login'
import Link from 'next/link'
import Header from "../components/Header";

export default function Home({ posts }) {
  return (
    <>
      <Login />
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {posts.map((f) => (
        <li key={f.slug}>
          <Link href={`/blog/${f.slug}`}>
            <a>
              {f.title} - {f.date}
            </a>
          </Link>
        </li>
          
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getPost();
  return { props: { posts }, revalidate: false };
};
