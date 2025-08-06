import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";

export default function Details() {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [newRating, setNewRating] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRes = await fetch(`https://dummyjson.com/products/${id}`);
        const productData = await productRes.json();
        setProduct(productData);
        setSelectedImage(productData.images?.[0]);


        const reviewsRes = await fetch(`https://dummyjson.com/products/${id}/reviews`);
        const reviewsData = await reviewsRes.json();
        setReviews(reviewsData.reviews);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmitReview = () => {
    if (newRating === null || reviewText.trim() === "") {
      alert("Please fill the review and select rating.");
      return;
    }

    alert(`Thank you for your review! ⭐ ${newRating}/5`);
    setReviewText("");
    setNewRating(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
  {/* Main Image */}
  <img
    src={selectedImage}
    alt={product.title}
    className="w-full max-h-[500px] object-cover rounded-lg mb-4"
  />

  {/* Thumbnails */}
  <div className="flex gap-3 overflow-x-auto">
    {product.images?.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Thumbnail ${index + 1}`}
        onClick={() => setSelectedImage(img)}
        className={`h-20 w-20 object-cover rounded cursor-pointer border-2 transition ${
          selectedImage === img ? "border-indigo-600" : "border-gray-300"
        }`}
      />
    ))}
  </div>
</div>


        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex justify-between">
            <p className="text-xl text-gray-800 mb-4">${product.price}</p>
            <p className="text-xl text-gray-800 mb-4">
              Rating: <Rating value={product.rating} precision={0.5} readOnly />
            </p>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="w-full bg-gray-100 mt-12 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="grid">
          <div className="flex">
            <h3 className="font-medium w-32">Brand:</h3>
            <p className="text-gray-900">{product.brand}</p>
          </div>
          <div className="flex my-2">
            <h3 className="font-medium w-32">Category:</h3>
            <p className="text-gray-900">{product.category}</p>
          </div>
          <div className="flex my-2">
            <h3 className="font-medium w-32">Stock:</h3>
            <p className="text-gray-900">{product.stock}</p>
          </div>
        </div>
      </div>
      {/* Product Info Section */}
<div className="mt-12">
  <h2 className="text-2xl font-bold mb-6">Product Information</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">

    {/* Return Policy */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Return Policy</h3>
      <p className="text-gray-600 mt-1">{product.returnPolicy}</p>
    </div>

    {/* Shipping Information */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Shipping Information</h3>
      <p className="text-gray-600 mt-1">{product.shippingInformation}</p>
    </div>

    {/* Warranty Information */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Warranty</h3>
      <p className="text-gray-600 mt-1">{product.warrantyInformation}</p>
    </div>

    {/* Availability */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Availability</h3>
      <p className="text-gray-600 mt-1">{product.availabilityStatus}</p>
    </div>
    
  </div>
</div>


      {/* Customer Reviews */}
      {/* Customer Reviews */}
<div className="mt-12">
  <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
  <div className="space-y-6">
    {product.reviews && product.reviews.length > 0 ? (
      product.reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-4"
        >
          <div className="flex items-center gap-4 w-full sm:w-1/4">
            <img
              src={`https://randomuser.me/api/portraits/${
                index % 2 === 0 ? "men" : "women"
              }/${index + 10}.jpg`}
              alt={review.reviewerName}
              className="w-14 h-14 rounded-full object-cover"
            />
            <p className="text-gray-800 font-semibold">
              {review.reviewerName}
            </p>
          </div>
          <div className="flex-1">
            <Rating value={review.rating} readOnly />
            <p className="text-gray-600 mt-1">{review.comment}</p>
            <p className="text-sm text-gray-400 mt-1">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p>No reviews yet.</p>
    )}
  </div>
</div>



      {/* Submit a Review */}
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
              onChange={(e, newValue) => setNewRating(newValue)}
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
