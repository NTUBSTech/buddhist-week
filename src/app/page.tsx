"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import { EventData } from "@/data/eventData";
import Card from "./components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <Navbar className="sticky top-0 w-full z-50" />
      <Wrapper className="py-6 sm:pb-9 lg:pb-28">
        <div className="grid gap-3 sm:grid-cols-3">
          {EventData.map((event, index) => {
            return (
              <Link key={index} href={`/${event.id}`}>
                <Card
                  name={event.name}
                  date={event.date}
                  headline={event.headline}
                  image={event.image}
                />
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
