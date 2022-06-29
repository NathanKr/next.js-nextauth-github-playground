import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session);
  console.log(status);

  return (
    <div className={styles.container}>
      <button onClick={() => signIn("github")}>SignIn</button>
      <button onClick={() => signOut()}>SignOut</button>
      <p>{status === "authenticated" ? 'signin' : 'signout'}</p>
    </div>
  );
};

export default Home;
