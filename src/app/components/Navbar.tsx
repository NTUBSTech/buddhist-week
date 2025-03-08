"use client";

import clsx from "clsx";
import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={clsx("py-3 lg:py-4 bg-white/30 backdrop-blur-lg", className)}
    >
      <Wrapper>
        <Link href="/">
          <img
            src="/logo-text.png"
            alt="Logo"
            className="aspect-[7876/3600] h-9 lg:h-12"
          />
        </Link>
      </Wrapper>
    </div>
  );
};

export default Navbar;
