import React from "react";
import "./New.css";

const New = ({ objhome }) => {
  return (
    <div className="product-container">
      {objhome.products.map((item) => (
        <div key={item.id} className="product-card">
          <img
            src={item.images[0]}
            alt={item.title}
            className="product-image"
          />

          <hr />

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
  );
};

export default New;
