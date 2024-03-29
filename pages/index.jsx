import Head from "next/head";
import { useForm } from "react-hook-form";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const { register, handleSubmit } = useForm();
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <div className={styles.containercontent}>
        <h1>Instagram</h1>
        <main className={styles.containerform}>
          <form>
            <input
              type="text"
              {...register("name")}
              placeholder="Telefone, nome de usuário ou email"
            />
            <input
              type="password"
              {...register("password")}
              placeholder="senha"
            />
            <button type="submit">Entrar</button>
          </form>
        </main>
        <div className={styles.row}>
          <p>ou</p>
        </div>
        <div>
          <p>Entrar com Facebook</p>
          <a>Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}
