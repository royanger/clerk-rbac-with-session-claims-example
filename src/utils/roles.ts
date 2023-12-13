import { Roles } from "@/types/globals";
import { auth } from "@clerk/nextjs";

export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth();
  console.log("check", sessionClaims, role);
  return sessionClaims?.metadata.role !== role;
};
