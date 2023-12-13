"use server";

import { checkRole } from "@/utils/roles";
import { clerkClient } from "@clerk/nextjs/server";

export async function searchUsers(_: any, formData: FormData) {
  if (!checkRole("admin")) {
    return { message: "not Authorized" };
  }
  try {
    const res = await clerkClient.users.getUserList({
      query: formData.get("search") as string,
    });
    const users = [];
    for (let i = 0; i < res.length; i++) {
      users.push({
        firstName: res[i].firstName,
        lastName: res[i].lastName,
        username: res[i].username,
        userId: res[i].id,
        email: res[i].emailAddresses.find(
          (email) => email.id === res[i].primaryEmailAddressId
        )?.emailAddress,
        role: res[i].publicMetadata.role,
      });
    }
    return { message: users };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    }
  }
}

export async function setRole(formData: FormData) {
  if (!checkRole("admin")) {
    return { message: "not Authorized" };
  }
  try {
    const res = await clerkClient.users.updateUser(
      formData.get("id") as string,
      {
        publicMetadata: { role: formData.get("role") },
      }
    );
    return { message: res.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}
