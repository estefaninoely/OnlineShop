import Navbar from "../components/Navbar";
import Shopping from "../components/Shopping";

export default function shop() {
  return (
    <>
      <section>
        <Navbar />
        <h1>My shopping cart</h1>
        <Shopping />
      </section>
    </>
  );
}
