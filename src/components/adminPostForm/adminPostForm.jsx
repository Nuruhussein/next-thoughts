"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex w-5/6 flex-col gap-4">
      <h1 className="text-lg font-semibold">Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="p-2 bg-gray-100 rounded border border-gray-300"
      />
      <input
        type="text"
        name="slug"
        placeholder="Slug"
        className="p-2 bg-gray-100 rounded border border-gray-300"
      />
      <input
        type="text"
        name="img"
        placeholder="Image URL"
        className="p-2 bg-gray-100 rounded border border-gray-300"
      />
      <textarea
        name="desc"
        placeholder="Description"
        rows={6}
        className="p-2 bg-gray-100 rounded border border-gray-300"
      />
      <button
        type="submit"
        className="p-2 bg-red-500 text-white rounded font-semibold hover:bg-red-600"
      >
        Add
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

export default AdminPostForm;
