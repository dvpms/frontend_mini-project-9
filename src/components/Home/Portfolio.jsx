import React, { useState } from "react";
import Work from "../../assets/images/HomePage/image.png";

const Portfolio = () => {
  const works = ["1", "2", "3", "4", "5", "6"];

  // State untuk kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Menyaring karya berdasarkan kategori yang dipilih
  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="text-center mb-8 flex justify-between">
          <h2 className="text-3xl font-bold">Our Work So Far</h2>

          {/* Filter Buttons */}
          <div className="text-center mb-8 font-semibold space-x-4">
            <button
              className="py-2 hover:underline focus:underline "

              onClick={() => setSelectedCategory("All")}
            >
              ALL
            </button>
            <button
              className="py-2 hover:underline focus:underline"
              onClick={() => setSelectedCategory("Branding")}
            >
              BRANDING
            </button>
            <button
              className="py-2 hover:underline focus:underline"
              onClick={() => setSelectedCategory("Illustration")}
            >
              ILLUSTRATION
            </button>
            <button
              className="py-2 hover:underline focus:underline"
              onClick={() => setSelectedCategory("Product Design")}
            >
              PRODUCT DESIGN
            </button>
          </div>
        </div>

        {/* Display Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredWorks.map((work) => (
            <div key={work.id} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={Work}
                alt={`Work ${work.id}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
