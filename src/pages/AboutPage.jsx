import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', color: '#0f172a' }}>B2B Cleaning Equipment Partner</h1>
        <hr style={{ width: '100px', height: '4px', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', opacity: 1, margin: '1rem auto' }} />
        
        {/* Hero Section */}
        <div className="row my-5">
          <div className="col-lg-6 mb-4">
            <div className="glass-card p-4" style={{ borderRadius: '20px', border: '2px solid #e2e8f0' }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#6366f1' }}>
                <i className="fa fa-building me-2"></i>B2B Focused Partner
              </h2>
              <p className="lead" style={{ fontFamily: 'Inter, sans-serif', color: '#475569', lineHeight: '1.8' }}>
                CleanPro Rentals is Bangalore's trusted B2B partner for commercial cleaning equipment. 
                We exclusively serve corporate clients, IT parks, facility managers, cleaning contractors, 
                malls, hospitals, and commercial establishments across Karnataka.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#475569', lineHeight: '1.8' }}>
                With over a decade of B2B experience, we understand the unique requirements of enterprises. 
                Our mission is to provide long-term, cost-effective equipment rental solutions with dedicated 
                account management and priority support for business clients.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <div className="glass-card p-4" style={{ borderRadius: '20px', border: '2px solid #e2e8f0' }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#10b981' }}>
                <i className="fa fa-handshake me-2"></i>Enterprise Solutions
              </h2>
              <p className="lead" style={{ fontFamily: 'Inter, sans-serif', color: '#475569', lineHeight: '1.8' }}>
                To provide enterprise-grade cleaning equipment with flexible B2B contracts, volume discounts, 
                and dedicated support that helps businesses maintain world-class facilities.
              </p>
              <div className="mt-4">
                <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#0f172a' }}>Why Businesses Choose Us?</h5>
                <ul style={{ fontFamily: 'Inter, sans-serif', color: '#475569', lineHeight: '2' }}>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Exclusive B2B pricing & bulk discounts</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Long-term contracts with fixed rates</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Dedicated account manager for corporates</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Priority support & replacement</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Invoice & GST billing for businesses</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#10b981' }}></i>Equipment training for facility staff</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row my-5 text-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="glass-card p-4" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white'
            }}>
              <h2 className="display-4 fw-bold">200+</h2>
              <p className="mb-0" style={{ fontSize: '1.1rem' }}>Corporate Clients</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="glass-card p-4" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white'
            }}>
              <h2 className="display-4 fw-bold">50+</h2>
              <p className="mb-0" style={{ fontSize: '1.1rem' }}>IT Parks Served</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="glass-card p-4" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
              color: 'white'
            }}>
              <h2 className="display-4 fw-bold">10+</h2>
              <p className="mb-0" style={{ fontSize: '1.1rem' }}>Years B2B Experience</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="glass-card p-4" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
              color: 'white'
            }}>
              <h2 className="display-4 fw-bold">100%</h2>
              <p className="mb-0" style={{ fontSize: '1.1rem' }}>B2B Focused</p>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', color: '#0f172a' }}>Our Equipment Categories</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
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
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}>
              <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '20px' }}>
                <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" alt="Floor Scrubbers" height={200} style={{ objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="card-body text-center">
                <div style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  <i className="fa fa-broom" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="card-title" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>Floor Scrubbers</h5>
                <p className="text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>Industrial floor cleaning machines</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(16, 185, 129, 0.3)';
              e.currentTarget.style.borderColor = '#10b981';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}>
              <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '20px' }}>
                <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400" alt="Vacuum Cleaners" height={200} style={{ objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="card-body text-center">
                <div style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  <i className="fa fa-wind" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="card-title" style={{ fontFamily: 'Poppons, sans-serif', fontWeight: '700' }}>Vacuum Cleaners</h5>
                <p className="text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>Wet & dry industrial vacuums</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(245, 158, 11, 0.3)';
              e.currentTarget.style.borderColor = '#f59e0b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}>
              <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '20px' }}>
                <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400" alt="Pressure Washers" height={200} style={{ objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="card-body text-center">
                <div style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  <i className="fa fa-water" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="card-title" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>Pressure Washers</h5>
                <p className="text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>High-pressure cleaning systems</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(236, 72, 153, 0.3)';
              e.currentTarget.style.borderColor = '#ec4899';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}>
              <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '20px' }}>
                <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400" alt="Complete Packages" height={200} style={{ objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="card-body text-center">
                <div style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  <i className="fa fa-box" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="card-title" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>Complete Packages</h5>
                <p className="text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>All-in-one cleaning solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="row my-5">
          <div className="col-12">
            <div className="glass-card p-5 text-center" style={{ 
              borderRadius: '20px', 
              border: '2px solid #e2e8f0',
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#0f172a' }}>
                <i className="fa fa-map-marker-alt me-2" style={{ color: '#6366f1' }}></i>
                Serving Bangalore B2B Market
              </h3>
              <p className="lead mt-3" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
                We serve corporate offices, IT parks, commercial complexes, malls, hospitals, and facility management 
                companies across Bangalore including Whitefield, Electronic City, Koramangala, Indiranagar, HSR Layout, 
                and all major business corridors.
              </p>
              <div className="mt-4">
                <a href="tel:+917871493796" className="btn btn-lg me-3" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: '600',
                  padding: '12px 30px'
                }}>
                  <i className="fa fa-phone me-2"></i>Business Inquiry
                </a>
                <a href="https://wa.me/917871493796" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: '600',
                  padding: '12px 30px'
                }}>
                  <i className="fab fa-whatsapp me-2"></i>Corporate WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage