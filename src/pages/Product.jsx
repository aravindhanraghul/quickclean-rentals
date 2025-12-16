import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import toast from "react-hot-toast";

import { Footer, Navbar } from "../components";
import { rentalEquipment } from "../data/rentalEquipment";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [rentalDays, setRentalDays] = useState(1);
  const [rentalType, setRentalType] = useState('weekly');

  const dispatch = useDispatch();

  const addProduct = (product) => {
    const rentalProduct = {
      ...product,
      rentalDays: rentalDays,
      rentalType: rentalType,
    };
    dispatch(addCart(rentalProduct));
    toast.success("Added to rental cart!");
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      
      // Find product from mock data
      const foundProduct = rentalEquipment.find(p => p.id === parseInt(id));
      
      if (foundProduct) {
        setProduct(foundProduct);
        setLoading(false);
        
        // Get similar products from same category
        const similar = rentalEquipment.filter(
          p => p.category === foundProduct.category && p.id !== foundProduct.id
        ).slice(0, 6);
        
        setSimilarProducts(similar);
        setLoading2(false);
      }
    };
    getProduct();
  }, [id]);

  const calculateRentalPrice = () => {
    if (!product) return 0;
    
    if (rentalType === 'monthly') {
      return product.monthlyRate * rentalDays;
    } else {
      return product.weeklyRate * rentalDays;
    }
  };

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) return null;
    
    const isAvailable = product.availability === "available";
    
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category.replace('-', ' ')}</h4>
              <h1 className="display-5">{product.title}</h1>
              
              {/* Discount Banner */}
              {product.discount && (
                <div className="mb-3">
                  <div style={{
                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                    color: 'white',
                    padding: '15px 25px',
                    borderRadius: '15px',
                    boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '15px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                      animation: 'shimmer 2s infinite'
                    }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <i className="fa fa-tag" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>
                        {product.discount.percentage}% OFF
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.95, marginTop: '4px' }}>
                        {product.discount.label}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Modern Rating Badge */}
              <div className="d-flex align-items-center gap-3 my-3">
                <div style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  padding: '10px 18px',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                }}>
                  <i className="fa fa-star" style={{ color: 'white', fontSize: '1rem' }}></i>
                  <span style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>
                    {product.rating?.rate || 4.9}
                  </span>
                </div>
                <span className="badge" style={{
                  background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                  color: '#475569',
                  padding: '10px 16px',
                  borderRadius: '20px',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  {product.rating?.count || 0} reviews
                </span>
              </div>
              
              <div className="my-4">
                <h5 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>Rental Rates:</h5>
                <div className="row g-3">
                  <div className="col-6">
                    <div style={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      padding: '16px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                      border: '2px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '6px' }}>WEEKLY</div>
                      <div style={{ color: 'white', fontSize: '1.6rem', fontWeight: '800', fontFamily: 'Poppins, sans-serif' }}>₹{product.weeklyRate}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      padding: '16px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                      border: '2px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '6px' }}>MONTHLY</div>
                      <div style={{ color: 'white', fontSize: '1.6rem', fontWeight: '800', fontFamily: 'Poppins, sans-serif' }}>₹{product.monthlyRate}</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="lead">{product.description}</p>
              
              {product.specifications && (
                <div className="my-3">
                  <h6>Specifications:</h6>
                  <p className="text-muted">{product.specifications}</p>
                </div>
              )}

              <div className="my-3" style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid #cbd5e1',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fa fa-shield-alt" style={{ color: '#6366f1', fontSize: '1.5rem' }}></i>
                <div>
                  <h6 className="mb-0" style={{ fontWeight: '700', color: '#0f172a' }}>Security Deposit: ₹{product.deposit}</h6>
                  <small className="text-muted">Refundable upon return</small>
                </div>
              </div>

              <div className="my-4">
                <h6>Rental Period:</h6>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className={`btn ${rentalType === 'weekly' ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setRentalType('weekly')}
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    className={`btn ${rentalType === 'monthly' ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setRentalType('monthly')}
                  >
                    Monthly
                  </button>
                </div>
                
                <div className="mt-3">
                  <label>Number of {rentalType === 'monthly' ? 'Months' : 'Weeks'}:</label>
                  <input
                    type="number"
                    className="form-control w-50"
                    min="1"
                    value={rentalDays}
                    onChange={(e) => setRentalDays(parseInt(e.target.value) || 1)}
                  />
                </div>

                <div className="mt-3">
                  <h5>Total Rental Cost: ₹{calculateRentalPrice().toFixed(2)}</h5>
                </div>
              </div>

              {!isAvailable && (
                <div className="alert alert-warning">
                  This equipment is currently rented out
                </div>
              )}

              <button
                className="btn btn-outline-dark btn-lg"
                onClick={() => addProduct(product)}
                disabled={!isAvailable}
              >
                {isAvailable ? 'Add to Rental Cart' : 'Currently Unavailable'}
              </button>
              <Link to="/cart" className="btn btn-dark btn-lg mx-3">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div 
                  key={item.id} 
                  className="card mx-4 text-center"
                  style={{
                    borderRadius: '20px',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(99, 102, 241, 0.3)';
                    e.currentTarget.style.borderColor = '#6366f1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '10px' }}>
                    <img
                      className="card-img-top p-3"
                      src={item.image}
                      alt="Card"
                      height={300}
                      width={300}
                      style={{ objectFit: 'contain', transition: 'transform 0.3s ease' }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1) rotate(3deg)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#0f172a' }}>
                      {item.title.substring(0, 20)}...
                    </h5>
                    <div style={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      display: 'inline-block',
                      marginTop: '8px'
                    }}>
                      <span style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>From ₹{item.weeklyRate}/week</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                      style={{ borderRadius: '10px', fontWeight: '600' }}
                    >
                      View Details
                    </Link>
                    <button
                      className="btn m-1"
                      style={{
                        borderRadius: '10px',
                        fontWeight: '600',
                        background: item.availability === "rented" ? '#94a3b8' : 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                        border: 'none',
                        color: 'white'
                      }}
                      onClick={() => {
                        toast.success("Added to cart");
                        addProduct(item);
                      }}
                      disabled={item.availability === "rented"}
                    >
                      {item.availability === "rented" ? "Unavailable" : "Rent Now"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">Similar Equipment</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
