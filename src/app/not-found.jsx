import Link from "next/link"

const NotFound = () => {
  return (
    <div className=" h-96 flex justify-center items-center ">
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound