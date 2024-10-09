import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/auth";
import Image from "next/image";

// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./api/auth/[...nextauth]";
const Navbar = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div className={` max-w-screen-xl mx-auto ${styles.container}`}>
      <Link href="/" className={styles.logo}>
        <Image
          className="w-28  h-24"
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-creative-thinking-png-png-image_10265573.png"
          alt=""
          width={30}
          height={30}
        />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}
export default Navbar;
