import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "B2B Commercial Cleaning Equipment",
      subtitle: "Professional rental solutions for corporate offices, IT parks & facility managers",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      bgImage: "https://s1.kaercher-media.com/mam/16283500/mainproduct/176102/d1.jpg"
    },
    {
      title: "Enterprise Floor Maintenance Solutions",
      subtitle: "Long-term contracts for commercial facilities and business complexes",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bgImage: "https://s1.kaercher-media.com/mam/12912520/mainproduct/173085/d0.jpg"
    },
    {
      title: "Corporate Pressure Washing Services",
      subtitle: "Bulk equipment rental for cleaning contractors and facility management",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      bgImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop&q=80"
    },
    {
      title: "Complete B2B Packages for Businesses",
      subtitle: "Tailored solutions for IT companies, malls, hospitals & commercial establishments",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      bgImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=800&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {  
      const hero = document.querySelector('.hero');
      if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <div className="hero border-0 pb-3" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        position: 'relative',
        padding: '2rem 0',
        marginTop: '70px'
      }}>
        <div className="position-relative mx-3" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)', zIndex: 1 }}>
          {/* Slider */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`position-absolute w-100 h-100 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: 'opacity 1s ease-in-out',
                zIndex: index === currentSlide ? 1 : 0,
                minHeight: '500px',
                top: 0,
                left: 0
              }}
            >
              <div className="row g-0 align-items-center" style={{ minHeight: '500px', background: slide.gradient }}>
                {/* Text Content - Left Side */}
                <div className="col-md-6 p-5 text-white">
                  <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {slide.title}
                  </h2>
                  <p className="fs-5 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {slide.subtitle}
                  </p>
                  <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong>B2B Partner</strong> - For Corporates, IT Parks & Facilities
                  </p>
                  
                  {/* Service Details */}
                  <div className="mb-4" style={{ 
                    background: 'rgba(255, 255, 255, 0.15)', 
                    backdropFilter: 'blur(10px)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa fa-building" style={{ fontSize: '1.2rem' }}></i>
                          <div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Service Type</div>
                            <div style={{ fontWeight: '700' }}>B2B Only</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa fa-calendar-alt" style={{ fontSize: '1.2rem' }}></i>
                          <div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Contracts</div>
                            <div style={{ fontWeight: '700' }}>Long-term</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa fa-phone-alt" style={{ fontSize: '1.2rem' }}></i>
                          <div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Business Line</div>
                            <div style={{ fontWeight: '700' }}>+91 78714 93796</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa fa-handshake" style={{ fontSize: '1.2rem' }}></i>
                          <div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>For Enterprises</div>
                            <div style={{ fontWeight: '700' }}>Custom Rates</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Image - Right Side */}
                <div className="col-md-6 p-0">
                  <img 
                    src={slide.bgImage} 
                    alt={slide.title}
                    className="img-fluid w-100 d-none d-md-block"
                    style={{ 
                      height: '500px', 
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="position-relative" style={{ zIndex: 2, minHeight: '500px' }}>

            {/* Slider Navigation Dots */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ zIndex: 3 }}>
              <div className="d-flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`btn btn-sm rounded-circle ${
                      index === currentSlide ? 'btn-light' : 'btn-outline-light'
                    }`}
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      padding: 0,
                      border: '2px solid white',
                      opacity: index === currentSlide ? 1 : 0.5,
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
              className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle"
              style={{ width: '50px', height: '50px', zIndex: 3, opacity: 0.8 }}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
              className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle"
              style={{ width: '50px', height: '50px', zIndex: 3, opacity: 0.8 }}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="container mt-5">
          <div className="row text-center g-4">
            <div className="col-md-3 col-sm-6">
              <div className="p-4 feature-box rounded hover-lift" style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
                <i className="fa fa-shield fa-3x mb-3" style={{ color: '#6366f1' }}></i>
                <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>Quality Assured</h5>
                <p className="text-muted small" style={{ fontFamily: 'Inter, sans-serif' }}>Premium brands only</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="p-4 feature-box rounded hover-lift" style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
                <i className="fa fa-truck fa-3x mb-3" style={{ color: '#10b981' }}></i>
                <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>Free Delivery</h5>
                <p className="text-muted small" style={{ fontFamily: 'Inter, sans-serif' }}>Within Bangalore</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="p-4 feature-box rounded hover-lift" style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
                <i className="fa fa-clock-o fa-3x mb-3" style={{ color: '#f59e0b' }}></i>
                <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>Flexible Rentals</h5>
                <p className="text-muted small" style={{ fontFamily: 'Inter, sans-serif' }}>Weekly/Monthly Plans</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="p-4 feature-box rounded hover-lift" style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
                <i className="fa fa-wrench fa-3x mb-3" style={{ color: '#ef4444' }}></i>
                <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>Maintenance Free</h5>
                <p className="text-muted small" style={{ fontFamily: 'Inter, sans-serif' }}>We handle it all</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
