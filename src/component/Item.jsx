import React from "react";
import { useCart } from "../context/CartContext";

function Item(props) {
  const { id, name, price, image, quantity } = props;
  const { formatMoney, removeItem, addQuantity, subtractQuantity } = useCart();
  return (
    <>
      <section className="flex justify-center">
        <div
          id="card"
          className="container flex justify-between items-center shadow-md m-5 p-6"
        >
          <img src={image} alt={id} className="w-52" />
          <div id="product">
            <p className="font-bold">ชื่อสินค้า : {name}</p>
            <p className="font-bold">ราคา : {formatMoney(price)} บาท</p>
          </div>
          <div id="quantity">
            <button className="font-bold text-2xl px-3 text-white bg-blue-500 text-center rounded-lg hover:shadow-md hover:bg-blue-600"
            onClick={() => subtractQuantity(id)}>
              -
            </button>
            <input
              type="text"
              value={quantity}
              disabled
              className="w-16  mx-4 text-center text-xl"
            />
            <button className="font-bold text-2xl px-2 text-white bg-blue-500 text-center rounded-lg hover:shadow-md hover:bg-blue-600" 
            onClick={() => addQuantity(id)}>
              +
            </button>
          </div>
          <div id="total-price" className="font-bold">{formatMoney(quantity * price)}</div>
          <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600" onClick={() => removeItem(id)}>
            ลบสินค้า
          </button>
        </div>
      </section>
    </>
  );
}

export default Item;
