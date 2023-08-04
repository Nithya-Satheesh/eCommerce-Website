import React from "react";

function Carousel(props) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      style={{ backgroundColor: "#F6F4EB" }}
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div
        className="carousel-inner"
        style={{
          backgroundColor: "#F6F4EB",
          maxWidth: "100%",
          minHeight: "90vh",
        }}
      >
        <div className="carousel-item active">
          <img
            className="d-block w-10"
            src="https://www.transparentpng.com/thumb/vegetables/all-fruits-and-vegetables-in-basket-background-transparent-veD4qx.png"
            alt="First slide"
            style={{ minWidth: "60vh", transform: "translate(30%,40%)" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-10"
            src="https://www.transparentpng.com/thumb/vegetables/all-fruits-and-vegetables-in-basket-background-transparent-veD4qx.png"
            alt="Second slide"
            style={{ minWidth: "60vh", transform: "translate(30%,40%)" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-10"
            src="https://www.transparentpng.com/thumb/vegetables/all-fruits-and-vegetables-in-basket-background-transparent-veD4qx.png"
            alt="Third slide"
            style={{ minWidth: "60vh", transform: "translate(30%,40%)" }}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ filter: "invert(100%)" }}
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ filter: "invert(100%)" }}
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
