"use client";

import { useParams } from "next/navigation";
import React from "react";
import Navbar from "../components/Navbar";
import { EventData } from "@/data/eventData";
import Wrapper from "../components/Wrapper";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const event = EventData.find((event) => String(event.id) === id);

  return (
    <div className="relative">
      <Navbar className="sticky top-0 w-full z-50" />
      <Wrapper className="py-6 sm:pb-9 lg:pb-28">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-9">
          <div className="flex flex-col gap-2 text-black">
            <div className="flex gap-2 items-center font-bold text-black uppercase text-base">
              <p>{event?.date}</p>
              <div className="rounded-full w-1 aspect-square bg-black" />
              <p>{event?.name}</p>
            </div>
            <h1 className="font-extrabold text-2xl sm:text-4xl">
              {event?.headline}
            </h1>
          </div>
          <img src={event?.image} alt={event?.name} className="rounded-lg" />
          <p className="font-light text-sm/6 sm:text-base/8">
            {event?.content.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page;
