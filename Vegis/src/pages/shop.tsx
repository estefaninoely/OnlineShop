import Navbar from "../components/Navbar";
import Shopping from "../components/Shopping";

export default function shop() {
  return (
    <>
      <section>
        <Navbar />
        <h1 className="ml-8 title pt-8">Shopping cart</h1>
        <Shopping />
      </section>
    </>
  );
}
