import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// // FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

// const posts=[
//   {
//     id:1,
//     img:"https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=600",
//   title:"helo",
//   body:"dnnzxlklkldks"
//   },
//     {id:2,
//        img:"https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=600",
//   title:"helo",
//   body:"dnnzxlklkldks"
//   }
//     ,{id:3,
//   title:"helo",
//    img:"https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=600",
//   body:"dnnzxlklkldks"
//   },  {id:4,
//      img:"https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=600",
//   title:"helo",
//   body:"dnnzxlklkldks"
//   }
// ]

const BlogPage = async () => {

  // // FETCH DATA WITH AN API
  const posts = await getData();

  // // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
     
      {posts.map((post) => (
        <div className={styles.posts} key={post._id}>
        <PostCard post={post} />
        </div>
      ))}
        
    </div>
  );
};

export default BlogPage;
