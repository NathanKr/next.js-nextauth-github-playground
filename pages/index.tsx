import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session);
  console.log(status);

  return (
    <div className={styles.container}>
      {status === "authenticated" ? (
        <button onClick={() => signOut()}>SignOut</button>
      ) : (
        <button onClick={() => signIn("github")}>SignIn</button>
      )}
      <p>{status === "authenticated" ? "signed in" : "signed out"}</p>
      {status === "authenticated" && (
        <p>
          {session.user?.email} , {session.user?.name}{" "}
        </p>
      )}
    </div>
  );
};

export default Home;
