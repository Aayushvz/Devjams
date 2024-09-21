import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cart[0].id);

  if (cart.cart.length === 0) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.cart.map((item) => (
          <li key={item.id}>
            {item.ProductName} - {item.Quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
