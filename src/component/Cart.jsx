import React from "react";
import Item from "./Item";
import { useCart } from "../context/CartContext";

function Cart() {
  const { products, total, formatMoney } = useCart();
  return (
    <>
      <div id="cart" className="">
        <h1 className="text-center font-bold text-4xl mt-6">
            {products.length > 0 ? `ยอดเงินรวม : ${formatMoney(total)} บาท` : "ไม่มีสินค้าในตะกร้า"}
            </h1>
        {products.map((data) => {
          return <Item key={data.id} {...data} />;
        })}
      </div>
    </>
  );
}

export default Cart;
