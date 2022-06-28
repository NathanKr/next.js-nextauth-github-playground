import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(status === "authenticated" ? "signin" : "signout");

  return (
    <div className={styles.container}>
      <button onClick={() => signIn("github")}>SignIn</button>
      <button onClick={() => signOut()}>SignOut</button>
      <p>{status === "authenticated" ? 'signin' : 'signout'}</p>
    </div>
  );
};

export default Home;
