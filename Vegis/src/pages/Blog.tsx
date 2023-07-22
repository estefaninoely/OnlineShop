import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const blogPosts = [
  {
    id: 1,
    title: "Spicy",
    image:
      "https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663502741-3KWG8TX45WB04WC20H9K/download+%286%29.jpeg?format=2500w",
    description:
      "Spicy, the enchanting flavor that sets taste buds ablaze, is a culinary sensation cherished worldwide. The allure of spicy cuisine lies not only in the fiery kick it imparts but also in the depth of flavors it unveils. From the tantalizing heat of chili peppers to the aromatic complexity of exotic spices, spicy dishes take our palates on a thrilling journey. Whether it's a sizzling plate of hot wings, a zesty curry, or a fiery salsa, spicy foods have a unique ability to awaken our senses and ignite a passionate love affair with food. Embarking on a culinary adventure with spicy delicacies is an experience that brings about a sense of excitement and fulfillment, leaving one yearning for more of this daring and delicious flavor. So, brace yourself for an adventure of the taste buds as we delve into the world of spicy delights! the enchanting flavor that sets taste buds ablaze, is a culinary sensation cherished worldwide. The allure of spicy cuisine lies not only in the fiery kick it imparts but also in the depth of flavors it unveils. From the tantalizing heat of chili peppers to the aromatic complexity of exotic spices, spicy dishes take our palates on a thrilling journey. Whether it's a sizzling plate of hot wings, a zesty curry, or a fiery salsa, spicy foods have a unique ability to awaken our senses and ignite a passionate love affair with food. Embarking on a culinary adventure with spicy delicacies is an experience that brings about a sense of excitement and fulfillment, leaving one yearning for more of this daring and delicious flavor. So, brace yourself for an adventure of the taste buds as we delve into the world of spicy delights ",
  },
  {
    id: 2,
    title: "Dill Classic",
    description:
      "Dill Classic, an age-old favorite among pickle enthusiasts, continues to enthrall taste buds with its timeless appeal and unforgettable flavor. Crafted with care, this delightful pickle boasts a perfect balance of fresh cucumbers, aromatic dill, and a harmonious blend of spices. Its distinct tanginess and crisp texture make it an ideal accompaniment to a variety of dishes, from sandwiches and burgers to salads and charcuterie boards. The magic lies in the carefully selected dill, which infuses each bite with its unique aroma, creating an unparalleled sensory experience. Whether you're a pickle aficionado or a curious foodie, Dill Classic is an essential addition to your gastronomic journey.",
    image:
      "https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663502754-9U5GJFE5J8GNC34FLGQ3/download+%285%29.jpeg?format=2500w",
  },
  {
    id: 3,
    title: "Col",
    description:
      "Col, a delightful pickle creation, brings a refreshing twist to the world of pickling. Made with vibrant and crunchy cabbage leaves, Col offers a crisp and tangy experience that is truly satisfying. Bursting with flavor, this pickle is carefully crafted with a special blend of herbs and spices that perfectly complement the natural sweetness of the cabbage. Its distinct and vibrant appearance adds a splash of color to any meal, making it an eye-catching and flavorful addition to salads, sandwiches, and wraps. Whether enjoyed on its own or paired with your favorite dishes, Col is sure to elevate your taste buds to new heights with every crunchy and tangy bite. Embark on a culinary adventure and savor the goodness of Col, a pickle delight that never fails to leave a lasting impression.",
    image:
      "https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663502703-NZOFS90EZWSPTSNFX4D6/download+%284%29.jpeg?format=2500w",
  },
  {
    id: 4,
    title: "Beetroot season",
    description:
      "Welcome to the enchanting world of Beetroot Season, a time when the earth unveils its vibrant and hearty bounty of beetroots. Known for their stunning ruby-red hue, these versatile vegetables capture the essence of nature's beauty and earthy sweetness. Beetroot Season brings with it a celebration of flavors, as these earth gems are transformed into an array of delectable dishes and pickled delights. From tangy beetroot pickles that tantalize the taste buds to hearty beetroot salads that offer a burst of freshness, this season offers a kaleidoscope of culinary possibilities. of Beetroot Season and savor the earthy sweetness that nature graciously offers. Indulge in the tastes, colors, and textures that make this time of year truly exceptional. Let the magic of beetroots awaken your senses and inspire your culinary creativity, as you relish in the beauty and bounty of this extraordinary season",
    image:
      "https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663502731-8QHKEACSDZ8QRQSR0OLR/download+%281%29.jpeg?format=2500w",
  },
  {
    id: 5,
    description:
      "Step into the fascinating world of pickling with 'Behind Brine,' a captivating journey that unravels the art and secrets of creating delicious and flavorful pickles. Delve into the process of preserving vegetables and fruits through brining, where the magic of flavors and textures come to life. Discover the age-old techniques and modern twists that elevate humble ingredients into delectable and mouthwatering pickles. 'Behind Brine' offers a behind-the-scenes glimpse into the hands-on craft, from hand-selecting the finest produce to carefully blending spices and seasonings. Explore the various pickling methods, from classic dills to innovative fusion recipes that tantalize the taste buds. Uniting tradition with creativity, 'Behind Brine' celebrates the rich history of pickling while inspiring culinary adventurers to experiment and savor the delightful results. Embark on a pickle-filled adventure, where each jar holds a story waiting to be tasted and cherished",
    title: "Behind Brine",
    image:
      "https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663502721-D0DZ20RDREIAHDSFL7EV/download+%282%29.jpeg?format=2500w",
  },
  {
    id: 6,
    description:
      "Preserved lemons are a true culinary gem, adored for their bold and intense flavors that elevate dishes to new heights. This ancient Mediterranean condiment is a labor of love, where fresh lemons are transformed into an enchanting fusion of tartness and saltiness. The process involves carefully packing lemons in salt, allowing time and patience to work their magic. As days pass, the lemons soften, their flavors mellow, and the aromatic oils infuse the preserving liquid with an irresistible fragrance ",
    title: "Preserved Lemons",
    image:
      "https://images.squarespace-cdn.com/content/v1/62beadc429579b663bb52d39/1656663502773-KM152V1V849HOHWSI1FV/download.jpeg?format=2500w",
  },
];

function Blog() {
  return (
    <>
      <Navbar />
      <div className="text-center grid grid-cols-2">
        {blogPosts.map((post) => (
          <div className="p-24" key={post.id}>
            <Link to={`/blog/${post.title}`}>
              <img src={post.image} alt={post.title} />
              <h1 className="title text-center mt-8">{post.title}</h1>
              <p className="textsmall underline text-rose-400">Read more</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
