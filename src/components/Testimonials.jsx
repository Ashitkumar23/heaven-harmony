const test = [
  {
    id: 1,
    name: "Classic Cotton Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Classic Cotton Tee in black.",
    review:
      "This is by far the most comfortable cotton tee I’ve purchased online. The site makes it so easy to find exactly what I need for my music sessions too.",
  },
  {
    id: 2,
    name: "Premium Crew Neck",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Premium Crew Neck in white.",
    review:
      "Excellent experience from browsing to checkout. The crew neck fits perfectly and I was impressed with how quickly it arrived at my doorstep.",
  },
  {
    id: 3,
    name: "Vintage Fit Shirt",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Vintage Fit Shirt in blue.",
    review:
      "I love the vintage vibe of this shirt! The fabric feels premium and the website has a fantastic range of instruments that complements my style.",
  },
  {
    id: 4,
    name: "Urban Streetwear Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Urban Streetwear Tee in grey.",
    review:
      "Great site with lots of options. I ordered this tee for casual gigs and was blown away by the quality and the excellent customer support team.",
  },
  {
    id: 5,
    name: "Soft Everyday Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt: "Soft Everyday Tee in red on hanger.",
    review:
      "This everyday tee has quickly become my favorite. The material is soft, durable, and the shopping experience was smooth and hassle-free.",
  },
  {
    id: 6,
    name: "Relaxed Fit Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Relaxed Fit Tee folded neatly.",
    review:
      "I highly recommend this site to anyone looking for stylish apparel and quality instruments. The relaxed fit tee is perfect for long jam sessions.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white my-4">
      <div className="mx-auto bg-blue-50 max-w-2xl rounded-lg px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Testimonials
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {test.map((item) => (
            <div
              key={item.id}
              className="group rounded-md relative bg-gray-200"
            >
              <h2 className="text-center text-lg p-2">{item.review}</h2>
              <div className="mt-4 flex m-2 justify-center ">
                <img
                  className="h-10 w-10 rounded-4xl"
                  src={item.imageSrc}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
