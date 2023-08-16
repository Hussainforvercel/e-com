"use client"
import React, { useState } from 'react';


function Products() {
  // Array of product objects
  const products = [
    {
      id: 1,
      category: 'shoe',
      name: 'Nike',
      price: 16.0,
      imageSrc: 'https://dummyimage.com/420x260',
    },
    {
        id: 1,
        category: 'phone',
        name: 'iphone',
        price: 16.0,
        imageSrc: 'https://dummyimage.com/420x260',
      },
      {
        id: 1,
        category: 'camera',
        name: 'Nikon',
        price: 16.0,
        imageSrc: 'https://dummyimage.com/420x260',
      },
      {
        id: 1,
        category: 'Headphones',
        name: 'audionic',
        price: 16.0,
        imageSrc: 'https://dummyimage.com/420x260',
      },
    // Add more product objects here...
  ];

  // State to track the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.imageSrc}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <p className="mt-1">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Display cart items */}
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Cart</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name} {item.category} <br /></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
