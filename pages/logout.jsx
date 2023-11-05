import { useSession, signOut } from "next-auth/react";

export default function Logout() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return <p>Not signed in.</p>;
}
