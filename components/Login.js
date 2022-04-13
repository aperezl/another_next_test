import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  const { data: session, status } = useSession();

  if (status === "loading") return <div>loading</div>;
  if (!session) return (
    <div>
      No session, please Login
      <button onClick={() => signIn() }>Sign In</button>
    </div>
  )

  return (
    <p>
      {session.user.name} ({session.user.email}) <button onClick={() => signOut() }>Sign Out</button>
    </p>
  );
};

export default Login