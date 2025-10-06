

const Product = () => {
  
  return (
    <div className="border border-gray-400 shadow-sm md:space-y-6 space-y-4 md:p-5 p-3 rounded-lg hover:scale-105 transition ease-in-out duration-300">
      <figure className="h-72 rounded-lg flex items-center justify-center group">
        <img
          src={}
          alt={}
          className="w-full h-72 rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </figure>
      <div className="md:space-y-4 space-y-3">
        <h2 className="text-2xl font-bold">{}</h2>
        <div className="flex items-center gap-4">
          <p className="font-medium text-gray-600 text-lg">
            Category : {}
          </p>
          {stock ? (
            <div className="badge badge-success animate-pulse">Available</div>
          ) : (
            <div className="badge badge-error">Stock Out</div>
          )}
        </div>

        <p className="font-medium text-primary text-2xl">Price : ${}</p>
      </div>
      <div className="flex justify-end">
       
          View Details
       
      </div>
    </div>
  );
};

export default Product;
