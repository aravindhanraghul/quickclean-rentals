import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Rental Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Browse Equipment
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const calculateRentalPrice = (item) => {
    // Default to weekly rate if no rental type specified
    const days = item.rentalDays || 1;
    const rentalType = item.rentalType || 'weekly';
    
    if (rentalType === 'monthly') {
      return item.monthlyRate * Math.ceil(days / 30);
    } else {
      return item.weeklyRate * Math.ceil(days / 7);
    }
  };

  const ShowCart = () => {
    let subtotal = 0;
    let totalDeposit = 0;
    let serviceFee = 50.0;
    let totalItems = 0;
    
    state.forEach((item) => {
      const rentalPrice = calculateRentalPrice(item);
      subtotal += rentalPrice * item.qty;
      totalDeposit += item.deposit * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Rental Items</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item, index) => {
                      const rentalPrice = calculateRentalPrice(item);
                      return (
                        <div key={`${item.id}-${index}`}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                              <p className="text-muted small">
                                {item.rentalType === 'monthly' && 'Monthly Rental'}
                                {(!item.rentalType || item.rentalType === 'weekly') && 'Weekly Rental'}
                              </p>
                              {item.startDate && item.endDate && (
                                <p className="text-muted small">
                                  <i className="fa fa-calendar"></i> {item.startDate} to {item.endDate}
                                </p>
                              )}
                              <p className="text-muted small">
                                Deposit: ₹{item.deposit}
                              </p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.qty}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ₹{rentalPrice.toFixed(2)}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Rental Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Equipment ({totalItems})<span>₹{subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Service Fee
                        <span>₹{serviceFee.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        <div>
                          <strong>Security Deposit</strong>
                          <p className="text-muted small mb-0">(Refundable)</p>
                        </div>
                        <span>
                          <strong>₹{totalDeposit.toFixed(2)}</strong>
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total Due Now</strong>
                        </div>
                        <span>
                          <strong>₹{(subtotal + serviceFee + totalDeposit).toFixed(2)}</strong>
                        </span>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <small className="text-muted">
                          * Deposit will be refunded upon equipment return in good condition
                        </small>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Rental Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
