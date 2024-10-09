import LoginForm from "@/components/loginForm/loginForm";
// import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { SignIn } from "@/components/signin/signin";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
         <SignIn/>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
