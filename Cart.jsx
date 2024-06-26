import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addcart, delCart } from "../Redux/action/Index";

function Cart() {
  const cartItems = useSelector((state) => state.HandleCart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addcart(product));
  };

  const handleRemove = (product) => {
    dispatch(delCart(product));
  };

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cartItems.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-row align-items-center justify-content-between">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="lead fw-bold">
                      {product.qty} X ${product.price} = Rs
                      {product.qty * product.price}
                    </p>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleRemove(product)}
                      >
                        <i className="fa fa-minus"></i> Remove
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleAdd(product)}
                      >
                        <i className="fa fa-plus"></i> Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
