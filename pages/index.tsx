import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {signIn,signOut} from 'next-auth/react';

const Home: NextPage = () => {

  
  return (
    <div className={styles.container}>
      <button onClick={() => signIn()}>SignIn</button>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
};

export default Home;
