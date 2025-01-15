// app/profile/page.js
'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    // ถ้าไม่มี session ให้ redirect ไปที่หน้า sign in
    router.push("/auth/signin");
  }

  return (
    <div className="container">
      <h2>{session?.user?.name}</h2>
      <p>{session?.user?.email}</p>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </div>
  );
};

export default Profile;
