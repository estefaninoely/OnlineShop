import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showpage, setShowPage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  function handlePopup() {
    setShowPopup(!showPopup);
  }
  const checkValidEMail = (value: any) => {
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailtest.test(value);
  };

  function handleSubscribe() {
    if (!email) {
      setEmailError("Please enter your email");
    } else if (!checkValidEMail(email)) {
      setEmailError("Enter a valid email address");
    } else {
      setShowPage(true);
      setEmailError("");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setEmail("");
        setShowPopup(!showPopup);
      }, 1000);
    }
  }

  return (
    <>
      <main className={showPopup ? "bgopacity" : ""}>
        <div className="bgImage2">
          <Navbar />
        </div>
        <section>
          <div className="bgImage">
            <div className="text-center leading-[8rem] pt-[15rem]">
              <h1 className="bigtitle">Speciality in pickles</h1>
              <Link
                className="bg-white p-5 textsmall pl-8 pr-8 hover:bg-black hover:text-white"
                to="/store"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center flex-col pt-20 pb-8 ">
            <h1 className="descriptionbig ">
              Ingredients of the highest quality
            </h1>
            <h2 className="descriptionsmall">
              our products are 100% organic, grown on our own farms.{" "}
            </h2>
          </div>
          <div className="flex">
            <div className="hover:scale-90">
              <img
                src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663492773-31HTCPNNANH6ISOTM5KR/download+%287%29.jpeg?format=1000w"
                alt="#"
              />
            </div>
            <div className="hover:scale-90">
              <img
                src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663492890-UAJWJWB9AYDQ2X7NQBQG/download+%282%29.jpeg?format=1000w"
                alt="#"
              />
            </div>
            <div className="hover:scale-90">
              <img
                src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663492728-IDP6VF757XU41KR18TFQ/download+%286%29.jpeg?format=1000w"
                alt="#"
              />
            </div>
          </div>
          <div className="text-center pt-8 pb-16">
            <Link to={"/store"}>
              <Button children="SEE MORE" large={true} black={false} />
            </Link>
          </div>
        </section>
        <section>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/56f96a558a65e2431339cdaf/1460572783131-6YDS3S34AQDVB18NAAKF/pickles-editorial-pink.jpg?format=2500w"
              alt=""
            />
          </div>
        </section>
        <section>
          <div className="pt-20 pb-20">
            <div className="flex flex-col text-center p-8">
              <div>
                <h1 className="descriptionbig">
                  Be the first to know about our next product!
                </h1>
                <h2 className="descriptionsmall leading-[4rem]">
                  register with your email address to receive news and updates
                  about our next new pickles.
                </h2>
              </div>
              <div className="mt-4 mb-1">
                <Button
                  large={true}
                  black={false}
                  children="CLICK TO SUBSCRIBE"
                  onClick={handlePopup}
                />
              </div>
              {showPopup && (
                <div>
                  <div className="popup">
                    <div className="flex justify-end">
                      <button className="text-gray-400" onClick={handlePopup}>
                        X
                      </button>
                    </div>
                    <h1>Subscription</h1>

                    <label>Email address</label>
                    <input
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                    {showNotification && <p>Thanks for your subscription!</p>}
                    <button className="popupbutton" onClick={handleSubscribe}>
                      Subscribe me
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="flex justify-evenly">
                <div className="vegis hover:animate-bounce">
                  {" "}
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663499705-6ISXH4YCEZBKRQAO53UX/pickels.jpeg?format=1000w"
                    alt=""
                  />
                </div>
                <div className="vegis hover:animate-pulse">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663499692-6H20H9TNCO9D7ORHO54D/hot-pepper.jpeg?format=1000w"
                    alt=""
                  />
                </div>
                <div className="vegis hover:animate-bounce">
                  {" "}
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5a66088807fc7b1b7a7292c8/1516636344605-0IFITNF89GIBVSQCAL6P/pickles-blog-beet-on-pink-square.JPG?format=1000w"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
