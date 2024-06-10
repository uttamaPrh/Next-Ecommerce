"use client";
import Link from "next/link";
import React, { useState } from "react";

const menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <img
        className="cursor-pointer"
        src="./menu.png"
        width={28}
        height={28}
        alt="Browser Not Supported"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className=" z-10 flex flex-col items-center justify-center gap-8 text-red-700 absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)]">
          <Link href="/">Home Page</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default menu;
