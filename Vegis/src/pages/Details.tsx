import { useParams } from "react-router";
import { Products } from "../context/Items";
import Navbar from "../components/Navbar";
import { Product } from "../utilities/types";
import useCartStore from "../context/store";

function Details() {
  const { currentItem, increaseAmount, decreaseAmount, addToCart } =
    useCartStore();
  console.log("currentItem", currentItem?.amount);
  const { productId } = useParams();

  console.log(currentItem);
  if (!productId) throw new Error("productId is undefined");

  const product = Products.find(
    (product) => product.id === +productId
  ) as Product;
   
  const quantity = () => {
    if (currentItem?.id === product.id) {
      return currentItem.amount;
    } else {
      return 0;
    }
   }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex gap-2 p-8">
          <h1 className="text-xl underline underline-offset-2">Tienda</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3.5 h-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <h1 className="text-xl">{product.title}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col p-8">
          <img className="w-20 h-auto image1" src={product.image} alt="#" />
          <img
            className="w-20 h-auto image2"
            src={product.second_image}
            alt=""
          ></img>
        </div>
        <div>
          <img className="w-[42rem]" src={product?.image} alt="" />
        </div>
        <div className="flex flex-col w-[30rem] justify-evenly">
          <div className="text-6xl image2">{product.title}</div>
          <div className="text-xl">{product.description}</div>
          <div className="flex items-center gap-8">
            <div className="text-3xl">{product.price}</div>
            <button
              className="border-solid border-black border-2 w-8"
              onClick={() => increaseAmount(product.id)}
            >
              +
            </button>
            {quantity()}
            <button
              className="border-solid border-black border-2 w-8"
              onClick={() => decreaseAmount(product.id)}
            >
              -
            </button>
          </div>
          <button
            className="p-8 bg-rose-400 w-60"
            onClick={() => addToCart(product)}
          >
            Add to Card
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
