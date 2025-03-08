"use client";

import React, { useState } from "react";

interface CardProps {
  image: string;
  date: string;
  name: string;
  headline: string;
}

const Card: React.FC<CardProps> = ({ image, date, name, headline }) => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-full aspect-[10/12] rounded-2xl overflow-hidden hover:shadow-xl"
    >
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover ${
          isHover && "scale-110"
        } ease-in duration-300`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent"></div>
      <div className=" absolute bottom-4 left-4 right-4 flex flex-col gap-2">
        <div className="flex gap-2 items-center font-bold text-white uppercase text-sm">
          <p>{date}</p>
          <div className="rounded-full w-1 aspect-square bg-white" />
          <p>{name}</p>
        </div>
        <h3 className="text-xl font-extrabold text-white">{headline}</h3>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
