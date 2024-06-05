import React from "react";
import Menu from "./menu";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "./searchbar";
import SearchIcon from "./NavIcons";

const navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile view  */}
      <div className="flex justify-between items-center h-full md:hidden">
        <div className=" text-2xl tracking-wide">LOGO</div>
        <Menu />
      </div>
      {/* big srceen */}
      <div className="hidden md:flex justify-between items-center h-full">
        {/* left */}
        <div className="w-1/3">
          <Link href="/" className="flex items-center gap-8">
            <Image src={"/logo.png"} width={24} height={24} alt="logo" />
            <div className=" text-2xl tracking-wide">LOGO</div>
          </Link>
        </div>
        {/* right */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <Searchbar />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default navbar;
