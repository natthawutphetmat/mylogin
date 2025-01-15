"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const Postpages = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="container">
        <h3>Please Sign In</h3>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    );
  }

  const isAdmin = session.user.role === "admin";

 if(session.user.role !== 'admin') {
   window.location.href="/";
 }

  return (
    <div className="container">
      <h2>{session.user.name}</h2>
      <p>{session.user.email}</p>
      <p>Role: {session.user.role}</p>
      {isAdmin ? <p>Welcome, Admin!</p> : <p>Welcome, User!</p>}
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Postpages;
