import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  const { data: session, status } = useSession();

  if (status === "loading") return <div>loading</div>;
  if (!session) return <div>No session, please Login</div>;

  // ¿Se podría eliminar éste if?
  // if (session) {
  return (
    <p>
      {session.user.name} ({session.user.email})
    </p>
  );
  // }
};
