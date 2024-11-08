import React from "react";
import { useCart } from "../context/CartContext";

function Header() {
  const {amount} = useCart()

  return (
    <div>
      <header className="flex justify-between items-center max-w-[1200px] m-auto p-4 h-[70px] border-b-2 border-gray-100 font-bold text-xl">
        <p>Shopping App</p>
        <p>สินค้าในตะกร้า : {amount}</p>
      </header>
    </div>
  );
}

export default Header;
