import React from 'react'

const Main = () => {

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: "$79.99",
    image: "https://via.placeholder.com/300?text=Sneakers",
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: "$149.99",
    image: "https://via.placeholder.com/300?text=Jacket",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "$199.99",
    image: "https://via.placeholder.com/300?text=Smart+Watch",
  },
  {
    id: 4,
    name: "Backpack",
    price: "$59.99",
    image: "https://via.placeholder.com/300?text=Backpack",
  },
];


  return (
    <div>
<main className="bg-gray-50 min-h-screen p-6 md:p-12">

      {/* Hero Banner */}
      <section className="relative bg-indigo-600 rounded-lg  text-white p-10 flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Step Up Your Style</h1>
          <p className="mb-6 text-lg">
            Discover the latest trends in fashion and accessories. Shop now and get exclusive deals.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
        <img
          src="https://via.placeholder.com/400x300?text=Fashion+Banner"
          alt="Fashion Banner"
          className="mt-8 md:mt-0 rounded-lg shadow-lg"
        />
      </section>

      {/* Featured Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Shoes", "Jackets", "Watches", "Bags"].map((category) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/100?text=${category}`}
                alt={category}
                className="mb-4"
              />
              <span className="font-medium text-gray-700">{category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(({ id, name, price, image }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <p className="text-indigo-600 font-bold">{price}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>


    </div>
  )
}

export default Main