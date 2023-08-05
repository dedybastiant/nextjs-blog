import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/dedy.jpg"}
          alt="An image showing dedy"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Dedy</h1>
      <p>
        I blog about web development - especially Frontend framekworks like
        Angular and React
      </p>
    </section>
  );
}

export default Hero;
