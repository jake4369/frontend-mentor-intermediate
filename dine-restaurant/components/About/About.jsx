"use client";

import { useEffect, useState } from "react";

import { aboutText } from "./../../constants/index";

import Card from "./Card";

const About = () => {
  const cards = aboutText.map((obj) => (
    <Card
      key={obj.heading}
      image={obj.image}
      heading={obj.heading}
      text={obj.text}
    />
  ));
  return (
    <section className="about">
      <div className="about__card-container">{cards}</div>
    </section>
  );
};

export default About;
