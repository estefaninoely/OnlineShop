import { useParams } from "react-router";
import { Products } from "../context/Items";
import Navbar from "../components/Navbar";
import { Product } from "../utilities/types";
import useCartStore from "../context/store";
import { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Details() {
  const { currentItem, increaseAmount, decreaseAmount, addToCart } =
    useCartStore();
  console.log("currentItem", currentItem?.amount);
  const { productId } = useParams();
  const [showNotification, setShowNotification] = useState(false);

  if (!productId) throw new Error("productId is undefined");
  const product = Products.find(
    (product) => product.id === +productId
  ) as Product;

  const [currentImage, setCurrentImage] = useState(product.image);

  const handlecurrentImage = (currentimage: any) => {
    setCurrentImage(currentimage);
  };

  const quantities = () => {
    if (currentItem?.id === product.id) {
      return currentItem.amount;
    } else {
      return 0;
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    const currentQuantity = quantities();
    if (currentQuantity > 0) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="p-8">
        <div>
          <div className="flex p-4 pb-8 gap-4">
            <h1 className="navbarfont underline underline-offset-2">SHOP</h1>
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
            <h1 className="navbarfont ">{product.title}</h1>
          </div>
        </div>
        <div className="flex-col flex md:flex md:flex-row">
          <div className="flex-col gap-4 hidden md:flex">
            <img
              className="w-96 h-auto image1"
              src={product.image}
              alt="#"
              onClick={() => handlecurrentImage(product.image)}
            />
            <img
              className="w-96 h-auto image2"
              src={product.second_image}
              alt="#"
              onClick={() => handlecurrentImage(product.second_image)}
            ></img>
          </div>
          <div>
            <img
              className="w-[50rem] md:w-[170rem]"
              src={currentImage}
              alt="#"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="descriptionbig mb-8">{product.title}</h1>
              <p className="descriptiondetails ">{product.description}</p>
            </div>
            <div>
              <div className="flex items-center gap-8 mb-10">
                <div className="numbersbig">{product.price}</div>
                <button
                  className="border-solid border-black border-2 w-8 numbers"
                  onClick={() => decreaseAmount(product.id)}
                >
                  -
                </button>

                <div className="numbers">{quantities()}</div>
                <button
                  className="border-solid border-black border-2 w-8 numbers"
                  onClick={() => increaseAmount(product.id)}
                >
                  +
                </button>
              </div>
              <Button
                black={false}
                large={true}
                onClick={handleAddToCart}
                blacktext={true}
              >
                Add to Card
              </Button>
              {showNotification && (
                <div className="textsmall mt-4">
                  Your item has been added to the cart!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Details;
