"use client";

import { usePathname, useRouter } from "next/navigation";

export const SearchUsers = (props: { children?: React.ReactNode } = {}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const title = formData.get("search") as string;
          router.push(pathname + "?search=" + title);
        }}
      >
        <label htmlFor="search">Search for Users</label>
        <input id="search" name="search" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
