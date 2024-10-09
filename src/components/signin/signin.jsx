
// import { signIn } from "@/auth"
import { getin } from "@/lib/action"
 
export function SignIn() {
  return (
    <form
      action={getin}
    >
      <button type="submit" className="bg-cyan-500 w-48 h-9 border border-r-2 text-black">Signin with Google</button>
    </form>
  )
} 