import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="backgroundimage"
          height=" 550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New Season Arrivals
            </h5>
            <p className="card-text lead fs-2">check out all the tends</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
