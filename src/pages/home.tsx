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
        <ProductCard
        productId="fdfdf" 
        price={4545} 
        name="mackbok" 
        stock={435} 
        handler={addToCartHandler} 
        photo='https://m.media-amazon.com/images/I/71eXNIDUGjL._AC_UY327_FMwebp_QL65_.jpg'>

        </ProductCard>
      </main>
    </div>
  );
};

export default Home
