import Image from "next/image";
import React from "react";

const cartItems = () => {
  const CartItem = true;
  return (
    <div className="w-max absolute rounded-md shadow-lg top-8 right-0 bg-white flex flex-col gap-6 z-20 p-4">
      {!CartItem ? (
        <div>Cart Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8 ">
            <div className="flex gap-4 ">
              <Image
                alt="prodict"
                width={72}
                height={96}
                className="rounded-md object-cover"
                src="https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className=" flex flex-col justify-between w-full">
                {/* top */}
                <div className=" flex items-center justify-between gap-8">
                  <h3 className=" font-semibold  ">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$69</div>
                </div>
                <div className="text-sm text-gray-500 ">Available</div>
                {/* bottom */}
                <div className=" flex justify-between text-sm ">
                  <span className="text-gray-500 ">Qty 2</span>
                  <span className="text-blue-500 cursor-pointer ">Remove</span>
                </div>
              </div>
            </div>
            {/* end of one item */}
            {/* start of another item */}
            <div className="flex gap-4 ">
              <Image
                alt="prodict"
                width={72}
                height={96}
                className="rounded-md object-cover"
                src="https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className=" flex flex-col justify-between w-full">
                {/* top */}
                <div className=" flex items-center justify-between gap-8">
                  <h3 className=" font-semibold  ">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$69</div>
                </div>
                <div className="text-sm text-gray-500 ">Available</div>
                {/* bottom */}
                <div className=" flex justify-between text-sm ">
                  <span className="text-gray-500 ">Qty 2</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className=""> $69 </span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deserunt, sequi?
            </p>
            <div className="flex justify-between ">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-500">
                View Card
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">Check Out</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default cartItems;
