import { auth } from "@/auth";
import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = async () => {
  const session = await auth();
  // const actionInComponent = async ()=>{
  //   "use server"
  //   console.log("it works!")
  // }

  return (
    <div>
      <form
        action={addPost}
        className="flex flex-col justify-center items-center gap-12 text-indigo-800"
      >
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input
          type="text"
          placeholder="userId"
          value={session.user.id}
          name="userId"
        />
        <button>Create</button>
      </form>

      <form
        action={deletePost}
        className="lex flex-col justify-center items-center gap-12 text-indigo-800"
        f
      >
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
