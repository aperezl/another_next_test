import prisma from "../lib/prisma";

export default function Home(props) {
  console.log({ props });
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {props.feed.map((f) => (
        <li key={f.title}>{f.title}</li>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  console.log({ feed });
  return { props: { feed }, revalidate: false };
};
