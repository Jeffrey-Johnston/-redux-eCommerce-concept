import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import keyboard from "../../assets/images/keyboard.jpg";
import logitech from "../../assets/images/logitech.jpg";
import womier from "../../assets/images/womier.jpeg";
import wirelessMouse from "../../assets/images/wireless-mouse.jpeg";
import gloriousMouse from "../../assets/images/glorious-mouse.png";
import logitechMouse from "../../assets/images/logitech-mouse.jpg";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 39.99,
    title: "Gamenote 60% Gaming Keyboard",
    description: "First book I ever wrote",
    image: keyboard,
  },
  {
    id: "p2",
    price: 123.64,
    title: "Logitech G513 Carbon LIGHTSYNC RGB",
    description: "Second book I ever wrote",
    image: logitech,
  },
  {
    id: "p3",
    price: 84.0,
    title: "Womier K68 RGB LED 65% Double Shot ABS",
    description: "Second book I ever wrote",
    image: womier,
  },
  {
    id: "p4",
    price: 17.0,
    title: "Rii RM200 Wireless Mouse",
    description: "Second book I ever wrote",
    image: wirelessMouse,
  },
  {
    id: "p5",
    price: 79.99,
    title: "Glorios Model 0 Wireless Gaming Mouse",
    description: "Second book I ever wrote",
    image: gloriousMouse,
  },
  {
    id: "p6",
    price: 58.48,
    title: "Logitech Wireless Mouse M320",
    description: "Second book I ever wrote",
    image: logitechMouse,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
