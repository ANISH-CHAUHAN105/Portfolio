"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image: "/headphones.png",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: "$29.99",
    image: "/mouse.png",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: "$79.99",
    image: "/keyboard.png",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: "$99.99",
    image: "/smartwatch.png",
  },
];

const Shop = () => {
  return (
    <>
      {/* SEO Enhancements */}
      <Head>
        <title>Shop Demo | Tech Store</title>
        <meta
          name="description"
          content="Browse and buy high-quality tech gadgets including headphones, keyboards, and smartwatches."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
        {/* Page Title */}
        <section className="max-w-6xl mx-auto p-6 md:p-12 text-center">
          <h1 className="text-4xl font-bold text-blue-400 dark:text-blue-300 mb-6">
            Shop Demo
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            Browse our collection of high-quality products and grab your favorite one!
          </p>
        </section>

        {/* Product Grid */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Image
                src={product.image}
                width={200}
                height={200}
                alt={`Image of ${product.name}`}
                className="mx-auto object-contain"
                priority={index < 2} // First 2 images load faster for better LCP
                loading={index >= 2 ? "lazy" : "eager"}
              />
              <h2 className="text-xl font-semibold mt-4 text-center dark:text-white">
                {product.name}
              </h2>
              <p className="text-blue-500 dark:text-blue-400 text-center mt-2 font-medium">
                {product.price}
              </p>
              <div className="mt-4 flex justify-center">
                <Link
                  href={`/product/${product.id}`}
                  aria-label={`Buy ${product.name} now`}
                  className="bg-blue-500 dark:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Shop;
