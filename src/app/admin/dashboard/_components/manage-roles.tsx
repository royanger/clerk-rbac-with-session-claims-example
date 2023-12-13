"use client";

import { useFormState } from "react-dom";
import { searchUsers, setRole } from "../_actions";

const initialState = {
  message: new Array(),
};
export const ManageRoles = () => {
  const [state, formAction] = useFormState(searchUsers, initialState);

  return (
    <>
      <div>
        <form action={formAction}>
          <label htmlFor="search">Search for Users</label>
          <input id="search" name="search" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>

      {Array.isArray(state?.message) &&
        state?.message?.map((user: any) => {
          return (
            <div key={user.userId}>
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div>{user.email}</div>
              <div>{user.role}</div>
              <div>
                <form action={setRole}>
                  <input type="hidden" value={user.userId} name="id" />
                  <input type="hidden" value="admin" name="role" />
                  <button type="submit">Make Admin</button>
                </form>
              </div>
              <div>
                <form action={setRole}>
                  <input type="hidden" value={user.userId} name="id" />
                  <input type="hidden" value="moderator" name="role" />
                  <button type="submit">Make Moderator</button>
                </form>
              </div>
            </div>
          );
        })}
    </>
  );
};
