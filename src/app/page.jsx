import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div
      className={` pl-6 justify-center max-w-screen-xl flex  mx-auto pt-14 ${styles.container}`}
    >
      <div className={styles.textContainer}>
        <h1 className={`font-semibold text-8xl `}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={` bg-white text-black text-xl ${styles.button}`}>
            Contact
          </button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt=""
          unoptimized
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
