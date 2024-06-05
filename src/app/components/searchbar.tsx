"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const searchbar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("s-data") as string;
    if (name) {
      router.push("/list?name=" + name);
    }
  };
  return (
    <form
      className=" flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        name="s-data"
        type="text"
        placeholder="Search Items"
        className="flex-1 bg-transparent border-none outline-none"
      />
      <button className=" cursor-pointer">
        <Image src="/search.png" width={16} height={16} alt="Search Button" />
      </button>
    </form>
  );
};

export default searchbar;
