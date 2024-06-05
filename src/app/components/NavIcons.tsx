"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavIcons = () => {
  const [openProfile, setProfile] = useState(false);
  const [openCart, setCart] = useState(false);
  const router = useRouter();
  const isLoggedIn = false; //temporarily set to false
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setProfile((prev) => !prev);
  };

  return (
    <div className="flex  items-center gap-4 xl:gap-6 relative ">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        alt="Profile Icon"
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {openProfile && (
        <div className="z-20 shadow-lg p-4 rounded text-sm top-12 left-0 absolute">
          <Link href="/profile">Profile </Link>
          <div className="mt-2 cursor-pointer"> Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        alt="Profile Icon"
        className="cursor-pointer"
      />
      <Image
        src="/cart.png"
        width={22}
        height={22}
        alt="Profile Icon"
        className="cursor-pointer"
        onClick={() => setCart((prev) => !prev)}
      />
      {openCart && <div className=""></div>}
    </div>
  );
};

export default NavIcons;
