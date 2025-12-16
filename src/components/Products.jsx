import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { rentalEquipment } from "../data/rentalEquipment";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const searchInputRef = useRef(null);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        if (componentMounted) {
          setData(rentalEquipment);
          setFilter(rentalEquipment);
          setLoading(false);
        }
      }, 500);

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    let updatedList = data.filter((item) => item.category === cat);
    updatedList = applySearchAndSort(updatedList);
    setFilter(updatedList);
  };

  const applySearchAndSort = (list) => {
    // Apply search
    let filtered = list.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply price range filter (based on weekly rate)
    filtered = filtered.filter((item) => 
      item.weeklyRate >= priceRange.min && item.weeklyRate <= priceRange.max
    );

    // Apply sorting (based on weekly rate)
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.weeklyRate - b.weeklyRate);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.weeklyRate - a.weeklyRate);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  };

  useEffect(() => {
    const filtered = applySearchAndSort(data);
    setFilter(filtered);
  }, [searchTerm, sortBy, data, priceRange]);

  // Maintain focus on search input
  useEffect(() => {
    if (searchInputRef.current && document.activeElement !== searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchTerm]);

  const ShowProducts = () => {
    return (
      <>
        {/* Search and Controls */}
        <div className="col-12 mb-4">
          <div className="position-relative" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="input-group" style={{ boxShadow: '0 4px 15px rgba(99, 102, 241, 0.2)', borderRadius: '15px', overflow: 'hidden' }}>
              <span className="input-group-text bg-white border-0" style={{ paddingLeft: '20px' }}>
                <i className={`fa ${searchTerm ? 'fa-search-plus' : 'fa-search'}`} style={{ 
                  color: '#6366f1',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s',
                  animation: searchTerm ? 'pulse-grow 1s infinite' : 'none'
                }}></i>
              </span>
              <input
                type="text"
                ref={searchInputRef}
                className="form-control border-0"
                placeholder="Search equipment by name, brand, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoComplete="off"
                style={{
                  padding: '15px 10px',
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
              {searchTerm && (
                <button 
                  className="btn border-0 bg-white" 
                  onClick={() => setSearchTerm('')}
                  style={{ 
                    paddingRight: '20px',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="fa fa-times-circle" style={{ color: '#ef4444', fontSize: '1.2rem' }}></i>
                </button>
              )}
            </div>
            {searchTerm && (
              <div className="position-absolute w-100 mt-2" style={{ zIndex: 100 }}>
                <div className="glass-card p-3" style={{ borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <i className="fa fa-filter me-1"></i>
                      Searching for: <strong style={{ color: '#6366f1' }}>"{searchTerm}"</strong>
                    </small>
                    <small className="badge" style={{ 
                      background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                      color: 'white'
                    }}>
                      {filter.length} results
                    </small>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Price Range Filter */}
          <div className="mt-3 p-3 glass-card" style={{ borderRadius: '10px' }}>
            <label className="form-label fw-semibold">💰 Weekly Rate: ₹{priceRange.min} - ₹{priceRange.max}</label>
            <input 
              type="range" 
              className="form-range" 
              min="0" 
              max="20000" 
              step="500"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
            />
          </div>
          
          <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-3">
            <div className="d-flex gap-2">
              <button
                className={`btn btn-sm ${viewMode === 'grid' ? 'btn-dark' : 'btn-outline-dark'}`}
                onClick={() => setViewMode('grid')}
                data-tooltip="Grid View"
                style={{ transition: 'all 0.3s' }}
              >
                <i className="fa fa-th"></i>
              </button>
              <button
                className={`btn btn-sm ${viewMode === 'list' ? 'btn-dark' : 'btn-outline-dark'}`}
                onClick={() => setViewMode('list')}
                data-tooltip="List View"
                style={{ transition: 'all 0.3s' }}
              >
                <i className="fa fa-list"></i>
              </button>
            </div>
            
            <div className="d-flex align-items-center gap-2">
              <i className="fa fa-sort-amount-down" style={{ color: '#6366f1', fontSize: '1.1rem' }}></i>
              <select
                className="form-select form-select-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ 
                  width: 'auto',
                  minWidth: '200px',
                  borderRadius: '10px',
                  border: '2px solid #e2e8f0',
                  padding: '8px 35px 8px 15px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = '0 2px 8px rgba(99, 102, 241, 0.1)';
                }}
              >
                <option value="default">✨ Default Order</option>
                <option value="price-low">💰 Price: Low to High</option>
                <option value="price-high">💎 Price: High to Low</option>
                <option value="name">🔤 Name: A to Z</option>
              </select>
            </div>
            
            <div className="text-muted">
              <small>{filter.length} equipment found</small>
            </div>
          </div>
        </div>

        <div className="buttons text-center py-4">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All Equipment
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("core-equipment")}
          >
            🥇 Core Machines
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("support-equipment")}
          >
            🥈 Support Equipment
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("accessories")}
          >
            🔧 Accessories
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("combo-packages")}
          >
            📦 Complete Package
          </button>
        </div>

        {filter.length === 0 && (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No equipment found matching your criteria</h4>
            <button className="btn btn-outline-dark mt-3" onClick={() => { setSearchTerm(''); setFilter(data); }}>
              Clear Search
            </button>
          </div>
        )}

        {filter.map((product, index) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className={`${viewMode === 'list' ? 'col-12' : 'col-lg-4 col-md-6'} col-sm-12 mb-4 reveal-animation`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="card modern-card glass-card text-center h-100" 
                style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: '2px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.3)';
                  e.currentTarget.style.borderColor = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {product.availability === "rented" && (
                  <div className="badge bg-danger position-absolute top-0 end-0 m-3" style={{ zIndex: 5 }}>
                    Currently Rented
                  </div>
                )}
                
                {/* Discount Banner */}
                {product.discount && (
                  <div className="position-absolute top-0 start-0" style={{ zIndex: 6 }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '0 0 15px 0',
                      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
                      fontWeight: '800',
                      fontSize: '0.85rem',
                      letterSpacing: '0.5px',
                      fontFamily: 'Poppins, sans-serif',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                        animation: 'shimmer 2s infinite'
                      }}></div>
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <div>{product.discount.percentage}% OFF</div>
                        <div style={{ fontSize: '0.65rem', fontWeight: '600', marginTop: '2px', opacity: 0.9 }}>
                          {product.discount.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Quick Action Buttons */}
                <div 
                  className="position-absolute top-0 start-0 m-3 d-flex flex-column gap-2" 
                  style={{ zIndex: 5 }}
                >
                  <button 
                    className="btn btn-sm rounded-circle"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.15) rotate(12deg)';
                      e.target.style.background = '#ef4444';
                      e.target.querySelector('i').style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) rotate(0deg)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                      e.target.querySelector('i').style.color = '#ef4444';
                    }}
                    onClick={() => toast.success('❤️ Added to favorites!')}
                  >
                    <i className="fa fa-heart" style={{ color: '#ef4444', transition: 'color 0.3s' }}></i>
                  </button>
                  
                  <Link 
                    to={"/product/" + product.id}
                    className="btn btn-sm rounded-circle"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.15)';
                      e.target.style.background = '#6366f1';
                      e.target.querySelector('i').style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                      e.target.querySelector('i').style.color = '#6366f1';
                    }}
                  >
                    <i className="fa fa-eye" style={{ color: '#6366f1', transition: 'color 0.3s' }}></i>
                  </Link>
                </div>
                
                <div className="position-relative overflow-hidden" style={{ height: '250px', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
                  <img
                    className="card-img-top p-3 tilt-effect"
                    src={product.image}
                    alt={product.title}
                    height={250}
                    style={{ objectFit: 'contain', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.15) rotate(5deg)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                  />
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#0f172a' }}>
                    {product.title}
                  </h5>
                  
                  {/* Rating Badge */}
                  <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                    <div style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      padding: '8px 16px',
                      borderRadius: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                    }}>
                      <i className="fa fa-star" style={{ color: 'white', fontSize: '0.9rem' }}></i>
                      <span style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>
                        {product.rating?.rate || 4.9}
                      </span>
                    </div>
                    <span className="badge" style={{
                      background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                      color: '#475569',
                      padding: '8px 12px',
                      borderRadius: '20px',
                      fontWeight: '600',
                      fontSize: '0.85rem'
                    }}>
                      {product.rating?.count || 0} reviews
                    </span>
                  </div>
                  
                  <p className="card-text text-muted small flex-grow-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {product.description.substring(0, 120)}...
                  </p>
                  <p className="text-muted small mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>
                    <i className="fa fa-tag me-1" style={{ color: '#6366f1' }}></i>
                    <strong>Brands:</strong> {product.brand}
                  </p>
                  
                  {/* Modern Price Display */}
                  <div className="mb-3">
                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <div style={{
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          padding: '12px',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                          border: '2px solid rgba(255, 255, 255, 0.2)'
                        }}>
                          <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '4px' }}>WEEKLY</div>
                          <div style={{ color: 'white', fontSize: '1.3rem', fontWeight: '800', fontFamily: 'Poppins, sans-serif' }}>₹{product.weeklyRate}</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          padding: '12px',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                          border: '2px solid rgba(255, 255, 255, 0.2)'
                        }}>
                          <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '4px' }}>MONTHLY</div>
                          <div style={{ color: 'white', fontSize: '1.3rem', fontWeight: '800', fontFamily: 'Poppins, sans-serif' }}>₹{product.monthlyRate}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div style={{
                        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        border: '2px solid #cbd5e1',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="fa fa-shield-alt" style={{ color: '#6366f1', fontSize: '1rem' }}></i>
                        <span style={{ fontWeight: '600', color: '#475569', fontSize: '0.9rem' }}>Deposit: ₹{product.deposit}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 pb-4">
                  <div className="d-flex gap-2 justify-content-center">
                    <Link
                      to={"/product/" + product.id}
                      className="btn btn-dark flex-fill tooltip-modern"
                      data-tooltip="View full details"
                      style={{ 
                        borderRadius: '12px', 
                        fontWeight: '600',
                        padding: '12px',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fa fa-info-circle me-2"></i>Details
                    </Link>
                    <button
                      className="btn tooltip-modern flex-fill"
                      data-tooltip={product.availability === "rented" ? "Currently unavailable" : "Add to cart"}
                      style={{ 
                        borderRadius: '12px', 
                        fontWeight: '600',
                        padding: '12px',
                        background: product.availability === "rented" ? '#94a3b8' : 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                        border: 'none',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onClick={() => {
                        toast.success("✨ Added to rental cart!");
                        addProduct(product);
                      }}
                      disabled={product.availability === "rented"}
                      onMouseEnter={(e) => {
                        if (product.availability !== "rented") {
                          e.target.style.transform = 'translateY(-3px) scale(1.05)';
                          e.target.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.4)';
                          e.target.style.background = 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = 'none';
                        if (product.availability !== "rented") {
                          e.target.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)';
                        }
                      }}
                    >
                      <i className="fa fa-shopping-cart me-2"></i>
                      {product.availability === "rented" ? "Rented" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', color: '#0f172a' }}>Commercial Cleaning Equipment for Rent</h2>
            <p className="text-center text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>Professional machines from IPC, Roots, Karcher, Bosch & more</p>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
