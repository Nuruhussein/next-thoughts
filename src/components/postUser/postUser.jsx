import { getUser } from "@/lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  let user;

  try {
    // Attempt to fetch user data
    user = await getUser(userId);
    // console.log("Fetched user:", user);
    // console.log("Fetched before user's name:", user);
    if (!user.username) {
      user = JSON.parse(JSON.stringify(user));
    }

    console.log("Fetched user's name:", user.name);
    // Log the fetched user data
  } catch (error) {
    console.error("Error fetching user:", error); // Log the error
    return <div className="text-gray-500">unknown author</div>; // Display error message
  }

  // Handle case where user is not found
  if (!user) {
    return <div className="text-gray-500">User not found</div>; // Provide some fallback UI
  }
  // console.log(user.name);

  // Ensure the user object has a name property and it's a non-empty string
  if (!user.name && !user.username) {
    return <div className="text-gray-500">Name not available</div>; // Handle missing name
  }

  return (
    <div className="flex items-center gap-5">
      <Image
        className="object-cover rounded-full"
        src={user.image ? user.image : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-2">
        <span className="text-gray-400 font-bold">Author</span>
        <span className="text-gray-600 font-medium">
          {user.name ? user.name : user.username}
        </span>
      </div>
    </div>
  );
};

export default PostUser;
