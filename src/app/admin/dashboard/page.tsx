import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { ManageRoles } from "./_components/manage-roles";

export default function AdminDashboard() {
  if (checkRole("admin")) {
    return redirect("/");
  }

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the &apos;admin&apos; role.</p>
      <ManageRoles />
    </>
  );
}
