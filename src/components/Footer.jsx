import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 glass-effect" style={{ 
        borderTop: '1px solid rgba(99, 102, 241, 0.1)',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="fw-bold mb-3" style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Poppins, sans-serif'
              }}>
                <i className="fa fa-shower me-2"></i>CleanPro Rentals
              </h3>
              <p className="text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
                Premium cleaning equipment rental services in Bangalore. Professional-grade tools for IT parks, offices, and commercial spaces.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-decoration-none tooltip-modern" data-tooltip="Facebook" style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px) scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0) scale(1)'}>
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="text-decoration-none tooltip-modern" data-tooltip="Twitter" style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px) scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0) scale(1)'}>
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-decoration-none tooltip-modern" data-tooltip="Instagram" style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px) scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0) scale(1)'}>
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="text-decoration-none tooltip-modern" data-tooltip="LinkedIn" style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0077b5 0%, #005582 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px) scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0) scale(1)'}>
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h5>
              <ul className="list-unstyled" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="mb-2">
                  <a href="/" className="text-muted text-decoration-none" style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.target.style.color = '#6366f1'; e.target.style.paddingLeft = '5px'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#6c757d'; e.target.style.paddingLeft = '0'; }}>
                    <i className="fa fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/product" className="text-muted text-decoration-none" style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.target.style.color = '#6366f1'; e.target.style.paddingLeft = '5px'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#6c757d'; e.target.style.paddingLeft = '0'; }}>
                    <i className="fa fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>Equipment
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-muted text-decoration-none" style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.target.style.color = '#6366f1'; e.target.style.paddingLeft = '5px'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#6c757d'; e.target.style.paddingLeft = '0'; }}>
                    <i className="fa fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-muted text-decoration-none" style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.target.style.color = '#6366f1'; e.target.style.paddingLeft = '5px'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#6c757d'; e.target.style.paddingLeft = '0'; }}>
                    <i className="fa fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</h5>
              <ul className="list-unstyled" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="mb-2">
                  <span className="text-muted">
                    <i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Equipment Rental
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">
                    <i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Technical Support
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">
                    <i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Maintenance Service
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">
                    <i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>24/7 Customer Care
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h5>
              <ul className="list-unstyled" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fa fa-map-marker-alt me-3 mt-1" style={{ color: '#6366f1' }}></i>
                    <span className="text-muted">Bangalore, Karnataka, India</span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fa fa-phone me-3 mt-1" style={{ color: '#10b981' }}></i>
                    <a href="tel:+917871493796" style={{ color: '#6b7280', textDecoration: 'none' }}
                       onMouseEnter={(e) => e.target.style.color = '#10b981'}
                       onMouseLeave={(e) => e.target.style.color = '#6b7280'}>
                      +91 78714 93796
                    </a>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fab fa-whatsapp me-3 mt-1" style={{ color: '#25D366', fontSize: '1.2rem' }}></i>
                    <a href="https://wa.me/917871493796" target="_blank" rel="noopener noreferrer" 
                       style={{ color: '#6b7280', textDecoration: 'none' }}
                       onMouseEnter={(e) => e.target.style.color = '#25D366'}
                       onMouseLeave={(e) => e.target.style.color = '#6b7280'}>
                      +91 78714 93796 (WhatsApp)
                    </a>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fa fa-envelope me-3 mt-1" style={{ color: '#f59e0b' }}></i>
                    <span className="text-muted">info@cleanpro.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="row mt-4 pt-4" style={{ borderTop: '1px solid rgba(99, 102, 241, 0.1)' }}>
            <div className="col-12">
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <div className="text-center px-3 py-2 glass-card" style={{ borderRadius: '10px' }}>
                  <i className="fa fa-shield-alt fa-2x mb-2" style={{ color: '#10b981' }}></i>
                  <div className="fw-semibold small" style={{ fontFamily: 'Inter, sans-serif' }}>Verified</div>
                  <div className="small text-muted">Equipment</div>
                </div>
                <div className="text-center px-3 py-2 glass-card" style={{ borderRadius: '10px' }}>
                  <i className="fa fa-lock fa-2x mb-2" style={{ color: '#6366f1' }}></i>
                  <div className="fw-semibold small" style={{ fontFamily: 'Inter, sans-serif' }}>Secure</div>
                  <div className="small text-muted">Payment</div>
                </div>
                <div className="text-center px-3 py-2 glass-card" style={{ borderRadius: '10px' }}>
                  <i className="fa fa-clock fa-2x mb-2" style={{ color: '#f59e0b' }}></i>
                  <div className="fw-semibold small" style={{ fontFamily: 'Inter, sans-serif' }}>24/7</div>
                  <div className="small text-muted">Support</div>
                </div>
                <div className="text-center px-3 py-2 glass-card" style={{ borderRadius: '10px' }}>
                  <i className="fa fa-star fa-2x mb-2" style={{ color: '#f59e0b' }}></i>
                  <div className="fw-semibold small" style={{ fontFamily: 'Inter, sans-serif' }}>Premium</div>
                  <div className="small text-muted">Quality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="text-muted mb-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                © 2025 <span className="fw-semibold" style={{ color: '#6366f1' }}>CleanPro Rentals</span>. All rights reserved. | 
                <a href="#" className="text-muted text-decoration-none ms-2" style={{ transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Privacy Policy</a> | 
                <a href="#" className="text-muted text-decoration-none ms-2" style={{ transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Terms & Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
