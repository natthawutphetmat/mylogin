"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const Profile = () => {
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

  return (
    <div className="container">
      <h2>{session.user.name}</h2>
      <div className="profile">
        {session.user.image ? (
          <img src={session.user.image} alt="Profile Image" />
        ) : (
          <img src="/default-avatar.png" alt="Default Avatar" />
        )}
      </div>
      <p>{session.user.email}</p>
      <p>Role: {session.user.role}</p>
      {isAdmin && <p>Welcome, Admin!</p>}
      <button className="signOut" onClick={() => signOut()}>
        ออก
      </button>
    </div>
  );
};

export default Profile;
