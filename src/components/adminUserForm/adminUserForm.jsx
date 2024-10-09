"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex w-5/6 flex-col gap-4 p-4">
      <h1 className="text-lg font-semibold">Add New User</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="p-2 bg-gray-100 rounded"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="p-2 bg-gray-100 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-2 bg-gray-100 rounded"
      />
      <input
        type="text"
        name="img"
        placeholder="Image URL"
        className="p-2 bg-gray-100 rounded"
      />
      <select
        name="isAdmin"
        className="p-2 text-gray-800 mb-8 bg-gray-100 rounded"
      >
        <option className="p-2 text-gray-800 rounded" value="false">
          Is Admin?
        </option>
        <option className="p-2 text-gray-800 rounded" value="false">
          No
        </option>
        <option className="p-2 text-gray-800 rounded" value="true">
          Yes
        </option>
      </select>
      <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

export default AdminUserForm;
