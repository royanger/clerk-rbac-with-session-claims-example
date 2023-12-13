import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <SignInButton />
      <Link href="/admin/dashboard">Dashboard</Link>
    </div>
  );
}
