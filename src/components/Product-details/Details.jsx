import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Details() {
  const product = {
    name: "Vintage Leather Backpack",
    price: "$120.00",
    description: `
    This vintage leather backpack is designed for those who appreciate both timeless style and functionality. 
    Crafted from premium full-grain leather, it ages beautifully and develops a unique patina over time, making 
    each piece truly one-of-a-kind. The spacious main compartment can easily fit a 15-inch laptop, books, and 
    other daily essentials. Multiple interior pockets help you stay organized, while the adjustable shoulder 
    straps ensure maximum comfort during long commutes or weekend getaways. Whether you're heading to work, 
    school, or a spontaneous adventure, this backpack is the perfect companion to carry everything you need 
    in style.
  `,
    material: "Full-grain Leather",
    texture: "Smooth Vintage Finish",
    brandColor: "Dark Brown",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt: "Vintage leather backpack with buckle straps.",
  };

  const colors = [
    { name: "Navy", value: "navy", class: "bg-gray-900" },
    { name: "Gray", value: "gray", class: "bg-gray-400" },
  ];

  const reviews = [
    {
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Absolutely love this backpack! The leather feels premium and the storage is perfect for my daily commute.",
    },
    {
      name: "Michael Smith",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      text: "Stylish and practical. I've received so many compliments. The straps are comfortable for long walks.",
    },
    {
      name: "Emma Brown",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      rating: 5,
      text: "High quality and looks even better in person. Worth every penny!",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("navy");
  const [newRating, setNewRating] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = () => {
   if (newRating === null || reviewText.trim() === "") {
    alert('please fill the area')
    return;
   }
   
    alert(`Thank you for your review! ⭐ ${newRating || 0}/5`);
    setReviewText("");
    setNewRating(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-4">{product.price}</p>

          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-900 mb-2">Colors</h2>
            <div className="flex items-center gap-4">
              {colors.map((color) => (
                <label key={color.value} className="relative">
                  <input
                    type="radio"
                    name="color"
                    value={color.value}
                    checked={selectedColor === color.value}
                    onChange={() => setSelectedColor(color.value)}
                    className="sr-only"
                  />
                  <span
                    className={`w-8 h-8 rounded-full ${color.class} inline-block border-2 ${
                      selectedColor === color.value
                        ? "ring-2 ring-gray-900"
                        : "border-gray-300"
                    }`}
                  ></span>
                </label>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Specifications Section */}
      <div className="w-full bg-gray-100 mt-12 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="grid">
          <div className="flex">
            <h3 className="font-medium w-32">Material:</h3>
            <p className="text-gray-900">{product.material}</p>
          </div>
          <div className="flex my-2">
            <h3 className="font-medium w-32">Texture:</h3>
            <p className="text-gray-900">{product.texture}</p>
          </div>
          <div className="flex">
            <h3 className="font-medium w-32">Brand Color:</h3>
            <p className="text-gray-900">{product.brandColor}</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-4"
            >
              {/* Customer Image & Name */}
              <div className="flex items-center gap-4 w-full sm:w-1/4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <p className="text-gray-800 font-semibold">{review.name}</p>
              </div>

              {/* Star Rating & Review Text */}
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.945a1 1 0 00-.364-1.118L2.67 9.372c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.945z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drop a Review */}
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">Drop a review</h2>
        <textarea
          rows={3}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
          placeholder="Write your feedback here..."
        />
        <div className="flex items-center justify-between mt-4">
          <Box>
            <Rating
              name="new-review-rating"
              value={newRating}
              onChange={(e, newValue) => {
                setNewRating(newValue);
              }}
            />
          </Box>
          <button
            onClick={handleSubmitReview}
            className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
