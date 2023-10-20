import Image from "next/image";

const Card = ({ image, heading, text }) => {
  return (
    <div className="about__card">
      <Image
        src={image}
        alt=""
        width={100}
        height={100}
        className="about__card-img"
        priority
      />
      <div className="about__card__text-content">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
