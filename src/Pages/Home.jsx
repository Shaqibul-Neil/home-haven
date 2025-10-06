import { Link } from "react-router";

const Home = () => {
  return (
    <section className="my-16 lg:my-24 space-y-12">
      <h2 className="text-3xl font-bold">Featured Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

      <div className="flex justify-center">
        <Link to="/products" className="btn btn-primary w-48 h-12 text-lg">
          See All Products
        </Link>
      </div>
    </section>
  );
};

export default Home;
