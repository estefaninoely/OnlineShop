import { useState } from "react";
import useStore from "../context/store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Payment() {
  const { cart, gettotalprice } = useStore();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [editEmail, setEditEmail] = useState(true);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };

  const checkValidEMail = (value: any) => {
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailtest.test(value);
  };

  const handleAddressButtonClick = () => {
    if (!email) {
      setEmailError("Please enter your email");
    } else if (!checkValidEMail(email)) {
      setEmailError("Enter a valid email address");
    } else {
      setShowAddress(true);
      setEmailError("");
      setEditEmail(false);
    }
  };

  const handleEditEmail = () => {
    setEditEmail(true);
    setShowAddress(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#f6f6f6] flex-col md:flex md:flex-row pt-12 pb-12 min-h-screen justify-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="border border-solid border-gray-300 md:w-[25rem] p-6 justify-between flex flex-col gap-4 bg-white rounded-sm">
            <div className="flex justify-between">
              <label className="titlesmall">1. Your Email</label>
              <button onClick={handleEditEmail} className="text-gray-400">
                Edit
              </button>
            </div>
            <input
              className="border border-solid border-black w-full rounded-sm p-2"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              readOnly={!editEmail}
            />
            <p className="text-gray-600 smallp -mt-3">
              You'll receive notifications at this email address.
            </p>
            {emailError && <p className=" text-red-500 ">{emailError}</p>}
            {!showAddress && (
              <button
                onClick={handleAddressButtonClick}
                className="text-white bg-[#313131] text-center p-2 w-full textsmall"
              >
                Next
              </button>
            )}
          </div>
          {showAddress && (
            <div className="border border-solid border-gray-300 w-[25rem] p-6 justify-between flex flex-col gap-3 bg-white rounded-sm">
              <label className="titlesmall">2. Delivery Methods</label>
              <div className="text-gray-300 cursor-not-allowed border border-solid border-gray-300 p-4">
                <p className="text-black"> Delivery options</p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  <p>Shipping not available for this product</p>
                </div>
              </div>
              <label>Shipping Address</label>
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={handleAddressChange}
                  className="border border-solid border-gray-300 w-[10.7rem] rounded-sm p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={handleAddressChange}
                  className="border border-solid border-gray-300 w-[10.7rem] rounded-sm p-2"
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Adress 1"
                  onChange={handleAddressChange}
                  className="border border-solid border-gray-300 w-full rounded-sm p-2"
                />
                <input
                  type="text"
                  placeholder="Adress 2"
                  onChange={handleAddressChange}
                  className="border border-solid border-gray-300 w-full rounded-sm p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  list="countries"
                  onChange={handleAddressChange}
                  placeholder="Country"
                  className="border border-solid border-gray-300 w-full rounded-sm p-2"
                />
              </div>
              <datalist id="countries">
                <option value="Germany" />
                <option value="Spain" />
              </datalist>
              <div className="flex justify-between">
                <input
                  className="border border-solid border-gray-300 w-28 rounded-sm p-2"
                  type="text"
                  placeholder="ZIP Code"
                  onChange={handleAddressChange}
                />
                <input
                  className="border border-solid border-gray-300 w-28 rounded-sm p-2"
                  type="text"
                  placeholder="City"
                  onChange={handleAddressChange}
                />
                <input
                  className="border border-solid border-gray-300 w-28 rounded-sm p-2"
                  type="text"
                  placeholder="State"
                  onChange={handleAddressChange}
                />
              </div>
            </div>
          )}
          <div className=" titlesmall cursor-not-allowed text-gray-500 border border-solid border-gray-300 md:w-[25rem] p-6 justify-between flex flex-col gap-3 rounded-sm">
            3. Payment
          </div>
          <div className="titlesmall cursor-not-allowed text-gray-500 border border-solid border-gray-300 md:w-[25rem] p-6 justify-between flex flex-col gap-3 rounded-sm">
            4. Review & Purchase
          </div>
        </div>
        <div>
          <div className="border border-solid border-gray-300 md:w-[25rem] p-6 justify-between flex flex-col gap-3 bg-white rounded-sm">
            {cart.map((items) => (
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    alt="#"
                    src={items.image}
                    className="w-28 border border-solid border-gray-300"
                  ></img>
                  <div className="textsmall ml-3">{items.title}</div>
                </div>
                <div className="flex flex-col numbers">
                  <div>{items.price}</div>
                  <div className="text-center">{items.amount}</div>
                </div>
              </div>
            ))}
            <div className="h-2/4 numbers">
              <div className="text-gray-400 flex justify-between">
                <p>Subtotal</p>
                <p>{gettotalprice(cart)}€</p>
              </div>
              <div className="text-gray-400 flex justify-between">
                <p>Tax</p>
                <p>0.00€</p>
              </div>
              <div className="text-gray-400 flex justify-between pb-4">
                <p>Shipping</p>
                <p>-</p>
              </div>
              <hr />
              <div className="text-gray-700 flex justify-between pt-4 numbersbig">
                <p>Total</p>
                <p>{gettotalprice(cart)}€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Payment;
