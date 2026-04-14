import React from "react";
import { useState } from "react";
import "./New.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const New = ({ objhome }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filtereddata = objhome.products.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()),
  );

  let sortingdata = [...filtereddata];

  if (sort == "lowtohigh") {
    sortingdata.sort((a, b) => a.price - b.price);
  } else if (sort == "hightolow") {
    sortingdata.sort((a, b) => b.price - a.price);
  } else if (sort == "atoz") {
    sortingdata.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "review") {
    sortingdata.sort((a, b) => b.rating - a.rating);
  } else if (sort === "newest") {
    sortingdata.sort(
      (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt),
    );
  }
  return (
    <>
      {/* <div className="searchingbox">
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div> */}

      <div className="searchingbox">
        <div className="animated-border-box">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search animated-input"
          />
        </div>
      </div>
      <div className="sortingbox">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="" disabled>
            Sort by: Featured
          </option>
          <option value="newest">Newest Arrivals</option>
          <option value="lowtohigh"> Price: Low to High </option>
          <option value="hightolow"> Price: High to Low </option>
          <option value="atoz"> Name: A-Z</option>
          <option value="review"> Avg. Customer Review </option>
        </select>
      </div>
      <div className="product-container">
        {sortingdata.map((item) => (
          <div key={item.id} className="product-card">
            <LazyLoadImage
              src={item.images[0]}
              effect="blur"
              wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "2s" },
              }}
              alt={item.title}
              className="product-image"
            />

            {/* <hr /> */}

            <div className="product-details">
              <p>
                <b>ID:</b> {item.id}
              </p>
              <p>
                <b>Title:</b> {item.title}
              </p>
              <p>
                <b>Description:</b> {item.description}
              </p>
              <p>
                <b>Category:</b> {item.category}
              </p>
              <p>
                <b>Brand:</b> {item.brand}
              </p>
              <p>
                <b>Price:</b> ${item.price}
              </p>
              <p>
                <b>Discount:</b> {item.discountPercentage}%
              </p>
              <p>
                <b>Rating:</b> ⭐ {item.rating}
              </p>
              <p>
                <b>Stock:</b> {item.stock}
              </p>
              <p>
                <b>SKU:</b> {item.sku}
              </p>
              <p>
                <b>Weight:</b> {item.weight}
              </p>
              <p>
                <b>Dimensions:</b> {item.dimensions.width} x{" "}
                {item.dimensions.height} x {item.dimensions.depth}
              </p>
              <p>
                <b>Warranty:</b> {item.warrantyInformation}
              </p>
              <p>
                <b>Shipping:</b> {item.shippingInformation}
              </p>
              <p>
                <b>Status:</b> {item.availabilityStatus}
              </p>
              <p>
                <b>Return Policy:</b> {item.returnPolicy}
              </p>
              <p>
                <b>Min Order:</b> {item.minimumOrderQuantity}
              </p>
              <p>
                <b>Tags:</b> {item.tags.join(", ")}
              </p>

              <div className="reviews-section">
                <p className="review-heading">Reviews:</p>
                {item.reviews.map((rev, index) => (
                  <div key={index} className="review-box">
                    <p>⭐ {rev.rating}</p>
                    <p className="review-comment">{rev.comment}</p>
                    <p className="review-author">{rev.reviewerName}</p>
                    <p className="review-author">{rev.reviewerEmail}</p>
                  </div>
                ))}
              </div>

              <p>
                <b>ReturnPolicy:</b> {item.returnPolicy}
              </p>
              <p>
                <b>MinimumOrderQuantity:</b> {item.minimumOrderQuantity}
              </p>

              <p>
                <b>Meta:</b> <br />
                <p>
                  <b>CreatedAt:</b> {item.meta.createdAt}
                </p>
                <p>
                  <b>UpdatedAt:</b> {item.meta.updatedAt}
                </p>
                <p>
                  <b>Barcode:</b> {item.meta.barcode}
                </p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default New;
