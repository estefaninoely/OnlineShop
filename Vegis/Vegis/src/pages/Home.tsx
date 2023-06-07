import pepinillos from "../assets/pepinillos.jpg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <div className="bgImage2">
          <Navbar />
        </div>
        <section>
          <div className="bgImage">
            <div className="text-center leading-[6rem] pt-[15rem]">
              <h1 className="text-[5rem] text-white font-bold">
                Speciality in pickles
              </h1>
              <a className="bg-white p-4" href="">
                Show Now
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center flex-col p-32">
            <h1 className="text-5xl">Ingredients of the highest quality</h1>
            <h2 className="text-xl font-light">
              our products are 100% organic, grown on our own farms.{" "}
            </h2>
          </div>
          <div className="flex">
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663492773-31HTCPNNANH6ISOTM5KR/download+%287%29.jpeg?format=1000w"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663492890-UAJWJWB9AYDQ2X7NQBQG/download+%282%29.jpeg?format=1000w"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663492728-IDP6VF757XU41KR18TFQ/download+%286%29.jpeg?format=1000w"
                alt=""
              />
            </div>
          </div>
          <div className="text-center p-14">
            <Button text="See more" />
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
          <div className="pt-40 pb-20">
            <div className="flex flex-col text-center p-8">
              <div>
                <h1 className="text-[2rem]">
                  Be the first to know about our next product!
                </h1>
                <h2 className="text-[1rem] font-light leading-[4rem]">
                  register with your email address to receive news and updates
                  about our next new pickles.
                </h2>
              </div>
              <div>
                <Button text="Click to subscribe" />
              </div>
            </div>
            <div className="flex justify-evenly">
              <div>
                <img
                  className="vegis"
                  src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663499705-6ISXH4YCEZBKRQAO53UX/pickels.jpeg?format=1000w"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="vegis"
                  src="https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663499692-6H20H9TNCO9D7ORHO54D/hot-pepper.jpeg?format=1000w"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="vegis"
                  src="https://images.squarespace-cdn.com/content/v1/5a66088807fc7b1b7a7292c8/1516636344605-0IFITNF89GIBVSQCAL6P/pickles-blog-beet-on-pink-square.JPG?format=1000w"
                  alt=""
                />
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
