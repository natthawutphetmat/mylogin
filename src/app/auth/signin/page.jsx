// app/auth/signin/page.js
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // ถ้าผู้ใช้ล็อกอินแล้วให้ไปที่หน้าอื่น
  if (session) {
    // router.refresh("/");
     window.location.href="/"                //   // หรือหน้าอื่นๆ ตามต้องการ
    return null; // ป้องกันไม่ให้หน้าปัจจุบันแสดงในกรณีที่ session มี
  }

  return (
    <div className="container mt-5">
      <div className="text-center">
        <img src="/google.svg" width={70} alt="Google logo" />
        <br />
        <br />
      </div>
      <h3>Sign in with Google</h3>
      <br />
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        <img src="/google.svg" width={30} alt="Google logo" /> Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
