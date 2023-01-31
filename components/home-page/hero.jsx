import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/ven.jpg" alt="my-image" width={280} height={300} />
      </div>
      <h1>Hey, I'm Sirojiddin</h1>
      <p>I blog about frontend development - especially framework React</p>
    </section>
  );
}

export default Hero;
