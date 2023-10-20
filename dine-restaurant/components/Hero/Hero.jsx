import Image from "next/image";

import BookTableBtn from "@components/Shared/BookTableBtn";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text-content">
        <Image
          src="/assets/logo.svg"
          alt="Dine"
          width={82.4}
          height={32}
          className="hero__logo"
        />

        <h1>
          Exquisite dining <br /> since 1989
        </h1>

        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>

        <BookTableBtn
          backgroundColor="#111"
          color="#fff"
          border="1px solid #fff"
        />
      </div>
    </section>
  );
};

export default Hero;
