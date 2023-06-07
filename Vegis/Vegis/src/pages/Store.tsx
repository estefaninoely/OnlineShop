import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Products } from "../utilities/Items";

function Store() {
  // const handleClick = ({ id }: Product) => {
  //   console.log("YUJU Clicked element ID:", id);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-3 text-center pt-20 pb-20">
        {Products.map((product) => (
          <div key={product.id}>
            <div className="image-container">
              <img src={product.image} alt="" />
              <img className="hover-image" src={product.second_image} alt="" />
            </div>
            <h2>{product.title}</h2>
            <h3 className="flex justify-center gap-2">
              {product.price}
              <div className="line-through">{product.Offer}</div>
            </h3>
            <p>{product.status}</p>
            <a href={product.link}></a>
          </div>
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Store;
