import { getPost } from "../lib/mdx";
import Link from 'next/link'
// import prisma from "../lib/prisma";

export default function Home({ posts }) {
  return (
    <>
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
  const posts = await getPost()
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}


// export const getStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return { props: { feed }, revalidate: false };
// };
