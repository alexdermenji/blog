import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          priority={true}
          src="/images/site/alex.jpg"
          alt="An image showing Alex"
          width={800}
          height={800}
        />
      </div>
      <h1>Hi, I am Alex</h1>
      <p>This blog is about coding books, especially about web development.</p>
    </section>
  );
};

export default Hero;
