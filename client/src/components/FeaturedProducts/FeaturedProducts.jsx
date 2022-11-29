import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          rerum, quo dolorum veritatis molestias possimus quia voluptatibus
          quidem iure ex dolorem esse fugiat dolor! Hic tempore officiis rerum
          corrupti deleniti.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong..."
          : loading
          ? "loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
