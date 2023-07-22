import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import useStore from "../context/store";
import Button from "./Button";
import Footer from "./Footer";

function Shopping() {
  const {
    cart,
    totalPrice,
    increaseFromCart,
    decreaseFromCart,
    gettotalprice,
  } = useStore();

  const navigate = useNavigate();

  const handlePayOnClick = () => {
    navigate("/payment", { state: { cart: cart } });
  };

  console.log("totalprice", totalPrice);
  return (
    <div className="flex flex-col mt-2 ">
      {cart.length === 0 ? (
        <div className="p-8 flex flex-col gap-4">
          <div className="textsmall">Your shopping cart is empty.</div>
          <Link to={"/store"}>
            <Button black={true}>FOLLOW SHOPPING</Button>
          </Link>
        </div>
      ) : (
        cart.map((item) => (
          <div className="p-8" key={item.id}>
            <div className="flex-col flex items-center sm:flex sm:flex-row justify-between">
              <img
                className="w-80 sm:w-[12rem]"
                src={item.image}
                alt="itemImage"
              />
              <h3 className="h1 sm:h2">{item.title}</h3>
              <div className="flex gap-2 text-gray-600 numberss sm:numbers">
                <button onClick={() => decreaseFromCart(item.id)}>-</button>
                <div>{item.amount}</div>
                <button onClick={() => increaseFromCart(item.id)}>+</button>
              </div>
              <div className="numberss sm:numbers">{item.totalPrice}€</div>
            </div>
            <hr />
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="flex flex-col sm:items-end items-center p-8 pt-0">
          <div className=" flex gap-44 text-gray-600">
            <p className="descriptionsmall">Subtotal</p>
            <p className="numbers">{gettotalprice(cart)}€</p>{" "}
          </div>
          <Button black={true} onClick={handlePayOnClick}>
            PAY NOW
          </Button>
        </div>
      )}
      <div className="mt-48">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Shopping;
