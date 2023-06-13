import { useParams } from "react-router";
import { Products } from "../utilities/Items";
import Navbar from "../components/Navbar";
import { useState } from "react";

// type products = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   second_image: string;
//   status: string;
//   link: string;
//   Offer: string;
// }

function Details() {
  const { productId } = useParams();
  const product = Products.find(
    (product) => product.id.toString() === productId
  );
  const [currentImage, setCurrentImage] = useState(product?.image);
  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };
  const [items, setItems] = useState(0);
  const handleAdd = () => {
    setItems(items + 1);
  };
  const handleSubstract = () => {
    setItems(items - 1);
    if (items <= 0) {
      setItems(0);
    }
  };
  const handleAddToCart = () => {
    product?.title;
    console.log(product?.title);
  };

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
          <h1 className="text-xl">{product?.title}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col p-8">
          <img
            className="w-20 h-auto image1"
            src={product?.image}
            alt="#"
            onClick={() => handleImageChange(product?.image)}
          />
          <img
            className="w-20 h-auto image2"
            src={product?.second_image}
            alt=""
            onClick={() => handleImageChange(product?.second_image)}
          ></img>
        </div>
        <div>
          <img className="w-[42rem]" src={currentImage} alt="" />
        </div>
        <div className="flex flex-col w-[30rem] justify-evenly">
          <div className="text-6xl image2">{product?.title}</div>
          <div className="text-xl">{product?.description}</div>
          <div className="flex items-center gap-8">
            <div className="text-3xl">{product?.price}</div>

            <button
              className="border-solid border-black border-2 w-8"
              onClick={handleAdd}
            >
              +
            </button>
            {items}
            <button
              className="border-solid border-black border-2 w-8"
              onClick={handleSubstract}
            >
              -
            </button>
          </div>
          <button onClick={handleAddToCart} className="p-8 bg-rose-400 w-60">
            Add to Card
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
