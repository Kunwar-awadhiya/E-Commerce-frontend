import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {

  const addToCartHandler = () => {}

  return (
    <div className="home">
      <section></section>


      <h1>
        Latest Products
        <Link to={'/search'} className="findMore">
          More
        </Link>
      </h1>

      <main>
        
      </main>
    </div>
  );
};

export default Home
