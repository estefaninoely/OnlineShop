import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { Link } from "react-router-dom";
import { Products } from "../context/Items.ts";

function Store() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col text-center pt-20 pb-20 md:grid md:grid-cols-3">
        {Products.map((product) => (
          <div key={product.id}>
            {product.status === "AGOTADO" ? (
              <div className="cursor-not-allowed">
                <div className="image-container">
                  <img src={product.image} alt="" />
                  <img
                    className="hover-image"
                    src={product.second_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="h2">{product.title}</h2>
                  <h3 className="flex justify-center gap-2 numbers">
                    {product.price}
                    {product.Offer && (
                      <div className="line-through numbers">
                        {product.Offer}
                      </div>
                    )}
                  </h3>
                  <p className="textsmall line-through cursor-not-allowed">
                    {product.status}
                  </p>
                  <p>Out of Stock</p>
                </div>
              </div>
            ) : (
              <Link to={`/details/${product.id}`}>
                <div className="image-container">
                  <img src={product.image} alt="" />
                  <img
                    className="hover-image"
                    src={product.second_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="h2">{product.title}</h2>
                  <h3 className="flex justify-center gap-2 numbers">
                    {product.price}
                    {product.Offer && (
                      <div className="line-through numbers">
                        {product.Offer}
                      </div>
                    )}
                  </h3>
                  <p className="textsmall">{product.status}</p>
                </div>
              </Link>
            )}
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
